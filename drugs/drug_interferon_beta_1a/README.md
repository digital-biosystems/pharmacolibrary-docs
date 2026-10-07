<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;interferon beta-1a&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;InterferonBeta1a_Savic2017_reference&quot;,&quot;label&quot;:&quot;Savic_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_interferon_beta_1a/InterferonBeta1a_Savic2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# interferon beta-1a

- **generic name:** interferon beta-1a
- **ATC codes:** `L03AB07`
- **DrugBank:** [DB00060](https://go.drugbank.com/drugs/DB00060) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Interferon beta-1a is a drug used to treat multiple sclerosis, including relapsing-remitting, secondary progressive, and primary progressive forms. It is an approved medicine and remains in use, with some investigational applications as well.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2450337](https://www.wikidata.org/wiki/Q2450337) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| neopterin triphosphate | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:05 | 4:15 | 1/2/0 | 1/0/0 | 0/0/0 | 166,091/42,288 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Savic_2017_reference](drugs/drug_interferon_beta_1a/InterferonBeta1a_Savic2017_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Savic RM et al., Population Pharmacokinetics of Cladribi…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0516-6](https://doi.org/10.1007/s40262-017-0516-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Mager_2003_reference](drugs/drug_interferon_beta_1a/InterferonBeta1a_Mager2003_reference.md) | — | parent + metabolite (no model) | 2 | Mager DE et al., Receptor-mediated pharmacokinetics and…, The Journal of pharmacology… (2003) | [10.1124/jpet.103.049502](https://doi.org/10.1124/jpet.103.049502) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Salmon_1996_reference](drugs/drug_interferon_beta_1a/InterferonBeta1a_Salmon1996_reference.md) | — | 1-compartment (no model) | 0 | Salmon P et al., Pharmacokinetics and pharmacodynamics o…, Journal of interferon & cyt… (1996) | [10.1089/jir.1996.16.759](https://doi.org/10.1089/jir.1996.16.759) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Mager_2002_neopterin](drugs/drug_interferon_beta_1a/pd_Mager_2002_neopterin.md) | neopterin ← interferon_beta_1a · indirect response — drug stimulates the production of neopterin | — | Mager DE et al., Receptor-mediated pharmacokinetic/pharm…, Pharmaceutical research (2002) | [10.1023/a:1020468902694](https://doi.org/10.1023/a:1020468902694) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=interferon_beta_1a) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: IFNAR1 (target), IFNAR2 (target), IFNB1 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mager_2002.pdf` | Mager DE et al., Receptor-mediated pharmacokinetic/pharm…, Pharmaceutical research (2002) | popPK | 10 | [10.1023/a:1020468902694](https://doi.org/10.1023/a:1020468902694) | [12425473](https://pubmed.ncbi.nlm.nih.gov/12425473) | The paper describes a quantitative PK/PD model for interferon-beta 1a in humans, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided evidence text, only model characteristics like F=0.33 and Smax are mentioned. |
| `Salmon_1996.pdf` | Salmon P et al., Pharmacokinetics and pharmacodynamics o…, Journal of interferon & cyt… (1996) | popPK | 10 | [10.1089/jir.1996.16.759](https://doi.org/10.1089/jir.1996.16.759) | [8910759](https://pubmed.ncbi.nlm.nih.gov/8910759) | The paper is a primary PK study for interferon_beta_1a in humans reporting key quantitative parameters (CL ~100 L/h, t1/2 ~5h) in the abstract text, though individual compartmental values (V, Q) are not explicitly listed. |
| `Mager_2003.pdf` | Mager DE et al., Receptor-mediated pharmacokinetics and…, The Journal of pharmacology… (2003) | popPK | 9 | [10.1124/jpet.103.049502](https://doi.org/10.1124/jpet.103.049502) | [12660309](https://pubmed.ncbi.nlm.nih.gov/12660309) | The paper is a PK/PD study of interferon-beta 1a in monkeys that reports specific quantitative values (Tmax, F, Smax) and a mechanistic model, though standard compartmental parameters like CL and V are not explicitly listed in the abstract text. |
| `Rogge_1998.pdf` | Rogge MC et al., Impaired bioavailability of interferon…, Drug delivery (1998) | popPK | 8 | [10.3109/10717549809065758](https://doi.org/10.3109/10717549809065758) | [19569995](https://pubmed.ncbi.nlm.nih.gov/19569995) | The paper reports qualitative PK parameters (Cmax, Tmax, AUC) for interferon beta-1a in humans, but lacks quantitative disposition parameters like clearance or volume, and the available AUC/Cmax values are activity-based rather than concentration-based. |
| `Scheinin_2022.pdf` | Scheinin M et al., A randomized pharmacokinetic-pharmacody…, Expert opinion on biologica… (2022) | popPK | 8 | [10.1080/14712598.2021.1895745](https://doi.org/10.1080/14712598.2021.1895745) | [33678097](https://pubmed.ncbi.nlm.nih.gov/33678097) | The paper is a PK bioequivalence study for interferon_beta_1a, but the specific quantitative parameter values are not present in the provided text. |

<sub>queue written 2026-10-06T23:01:46.026223+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brearley_2007 | irrelevant | 2 | 0 | The study describes PK profiles but the provided evidence contains no numeric parameter values (only qualitative descriptions of variability and similarity). |
| popPK | Chekka_2025 | irrelevant | 0 | 0 | The study reports pharmacodynamic (PD) biomarkers (protein expression changes) rather than pharmacokinetic (PK) disposition parameters (CL, V, etc.) for interferon_beta_1a. |
| popPK | David_2012 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of fingolimod, with interferon_beta_1a serving only as a comparator agent in efficacy studies. |
| popPK | Hu_2011 | irrelevant | 3 | 0 | The study is a preclinical evaluation in non-human primates (Rhesus monkeys) and provides no specific numeric parameter values in the evidence. |
| popPK | Kolind_2022 | irrelevant | 0 | 0 | The paper is a myelin water imaging (MRI) study evaluating demyelination outcomes and does not report any pharmacokinetic parameters for interferon_beta_1a. |
| popPK | Liang_2005 | irrelevant | 0 | 0 | The paper focuses on statistical methods for gene expression microarray data, not pharmacokinetic disposition parameters for interferon_beta_1a. |
| popPK | Mager_2002 | relevant | 10 | 2 | The paper describes a quantitative PK/PD model for interferon-beta 1a in humans, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided evidence text, only model characteristics like F=0.33 and Smax are mentioned. |
| popPK | Mehanna_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic biomarker discovery (miRNA sequencing) paper, not a pharmacokinetic study, and reports no PK parameters such as clearance, volume, or half-life for the drug itself. |
| popPK | Rogge_1998 | relevant | 8 | 2 | The paper reports qualitative PK parameters (Cmax, Tmax, AUC) for interferon beta-1a in humans, but lacks quantitative disposition parameters like clearance or volume, and the available AUC/Cmax values are activity-based rather than concentration-based. |
| popPK | Savic_2017 | irrelevant | 0 | 0 | The study focuses on the population PK of cladribine, with interferon_beta_1a used only as a co-administered agent in a drug-drug interaction study. |
| popPK | Scheinin_2022 | relevant | 8 | 2 | The paper is a PK bioequivalence study for interferon_beta_1a, but the specific quantitative parameter values are not present in the provided text. |
| popPK | Varhaug_2018 | irrelevant | 0 | 0 | The study is a biomarker investigation for multiple sclerosis and does not report pharmacokinetic parameters (CL, V, ka, etc.) for interferon-beta 1a. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:04 UTC</sub>
