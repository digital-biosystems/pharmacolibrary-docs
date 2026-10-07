<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;rupatadine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rupatadine_Santamara2017_base&quot;,&quot;label&quot;:&quot;Santamar\u00eda_2017_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rupatadine/Rupatadine_Santamara2017_base.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# rupatadine

- **generic name:** rupatadine
- **ATC codes:** `R06AX28`
- **DrugBank:** [DB11614](https://go.drugbank.com/drugs/DB11614) · **PubChem:** [CID 133017](https://pubchem.ncbi.nlm.nih.gov/compound/133017)
- **molar mass:** 415.97 g/mol (C26H26ClN3) — DrugBank
- **groups:** approved, investigational

## About

Rupatadine is an antihistamine used to relieve symptoms of allergic conditions such as allergic rhinitis and urticaria. It is approved and used in several countries, though it is not authorised by the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423450](https://www.wikidata.org/wiki/Q423450) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rupatadine | parent | 415.97 | C26H26ClN3 | DrugBank | [133017](https://pubchem.ncbi.nlm.nih.gov/compound/133017) | Santamaria_2021, Santamaría_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:36 | 1:19 | 1/0/2 | 1/1/0 | 0/0/0 | 100,109/6,782 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Santamaría_2017_base](drugs/drug_rupatadine/Rupatadine_Santamara2017_base.md) | ▶ model + simulator | 2-compartment, oral | 6 | Santamaría E et al., Population pharmacokinetic modelling of…, PloS one (2017) | [10.1371/journal.pone.0176091](https://doi.org/10.1371/journal.pone.0176091) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Santamaria_2021_reference](drugs/drug_rupatadine/Rupatadine_Santamaria2021_reference.md) | — | 2-compartment (no model) | 5 | Santamaria E et al., Rupatadine Oral Solution Titration by B…, Clinical pharmacology : adv… (2021) | [10.2147/CPAA.S312911](https://doi.org/10.2147/CPAA.S312911) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Santamaría_2017_final](drugs/drug_rupatadine/Rupatadine_Santamara2017_final.md) | — | 2-compartment (no model) | 5 | Santamaría E et al., Population pharmacokinetic modelling of…, PloS one (2017) | [10.1371/journal.pone.0176091](https://doi.org/10.1371/journal.pone.0176091) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Roquini_2024_Larval_motility](drugs/drug_rupatadine/pd_Roquini_2024_Larval_motility.md) | Larval motility ← rupatadine · direct sigmoid Emax (Hill) effect | — | Roquini DB et al., Antihistamines H, ACS omega (2024) | [10.1021/acsomega.4c04773](https://doi.org/10.1021/acsomega.4c04773) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Peña_2008_flare](drugs/drug_rupatadine/pd_Pe_a_2008_flare.md) | histamine-induced flare reaction ← rupatadine, desloratadine · indirect response — drug inhibits the production of histamine-induced flare reaction | — | Peña J et al., Antihistaminic effects of rupatadine an…, European journal of drug me… (2008) | [10.1007/BF03191027](https://doi.org/10.1007/BF03191027) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rupatadine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target), PTAFR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peña_2008.pdf` | Peña J et al., Antihistaminic effects of rupatadine an…, European journal of drug me… (2008) | popPK | 10 | [10.1007/BF03191027](https://doi.org/10.1007/BF03191027) | [18777946](https://pubmed.ncbi.nlm.nih.gov/18777946) | The abstract describes a population PKPD study with two-compartmental kinetics for rupatadine, but specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence. |

<sub>queue written 2026-10-07T21:35:21.886445+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lin_2024 | irrelevant | 2 | 2 | The study is a bioequivalence trial reporting non-compartmental PK metrics (Cmax, AUC, t1/2, lambda_z) but does not report the compartmental/population-PK disposition parameters (CL, V, Q, ka) required for the extraction task. |
| popPK | Peña_2008 | relevant | 10 | 0 | The abstract describes a population PKPD study with two-compartmental kinetics for rupatadine, but specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence. |
| popPK | Roquini_2024 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic screening of anthelmintic activity against parasites, containing no pharmacokinetic parameters for rupatadine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:35 UTC</sub>
