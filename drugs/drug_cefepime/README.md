<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefepime&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefepime_Principe2022_reference&quot;,&quot;label&quot;:&quot;Principe_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefepime/Cefepime_Principe2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefepime_Valadez2025_reference&quot;,&quot;label&quot;:&quot;Valadez_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefepime/Cefepime_Valadez2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cefepime

- **generic name:** cefepime
- **ATC codes:** `J01DE01`, `J01RA06`
- **DrugBank:** [DB01413](https://go.drugbank.com/drugs/DB01413) · **PubChem:** [CID 5479537](https://pubchem.ncbi.nlm.nih.gov/compound/5479537)
- **molar mass:** 480.561 g/mol (C19H24N6O5S2) — DrugBank
- **groups:** approved, investigational

## About

Cefepime is a fourth-generation cephalosporin antibiotic used to treat serious bacterial infections such as pneumonia, sepsis, urinary tract infections, and infections caused by gram-negative bacteria including Pseudomonas. It is an approved antibiotic in widespread clinical use, typically given by injection in hospital settings for severe infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2552927](https://www.wikidata.org/wiki/Q2552927) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefepime | parent | 480.561 | C19H24N6O5S2 | DrugBank | [5479537](https://pubchem.ncbi.nlm.nih.gov/compound/5479537) | Capparelli_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:29 | 4:37 | 2/3/0 | 1/0/0 | 0/0/0 | 253,530/18,695 | einfracz / qwen3.8-27b | 6 | 1/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Principe_2022_reference](drugs/drug_cefepime/Cefepime_Principe2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Principe L et al., Microbiological, Clinical, and PK/PD Fe…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15040463](https://doi.org/10.3390/ph15040463) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Valadez_2025_reference](drugs/drug_cefepime/Cefepime_Valadez2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Valadez A et al., Individual target pharmacokinetic/pharm…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00102-25](https://doi.org/10.1128/aac.00102-25) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Barreto_2023_reference](drugs/drug_cefepime/Cefepime_Barreto2023_reference.md) | — | 1-compartment (no model) | 0 | Barreto EF et al., Population pharmacokinetic model of cef…, Antimicrobial agents and ch… (2023) | [10.1128/aac.00810-23](https://doi.org/10.1128/aac.00810-23) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Capparelli_2005_reference](drugs/drug_cefepime/Cefepime_Capparelli2005_reference.md) | — | 1-compartment (no model) | 0 | Capparelli E et al., Population pharmacokinetics of cefepime…, Antimicrobial agents and ch… (2005) | [10.1128/AAC.49.7.2760-2766.2005](https://doi.org/10.1128/AAC.49.7.2760-2766.2005) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Walker_2005_reference](drugs/drug_cefepime/Cefepime_Walker2005_reference.md) | — | 1-compartment (no model) | 0 | Walker P et al., Subcutaneous administration of cefepime, Journal of pain and symptom… (2005) | [10.1016/j.jpainsymman.2005.03.007](https://doi.org/10.1016/j.jpainsymman.2005.03.007) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">mouse</span> | [Muller_2022_1_log10_kill](drugs/drug_cefepime/pd_Muller_2022_1_log10_kill.md) | 1 log10 kill ← cefepime · direct sigmoid Emax (Hill) effect | — | Muller AE et al., Cefepime pharmacodynamic targets agains…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac349](https://doi.org/10.1093/jac/dkac349) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefepime) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC15A1` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 143 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 2  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barreto_2023.pdf` | Barreto EF et al., Population pharmacokinetic model of cef…, Antimicrobial agents and ch… (2023) | popPK | 10 | [10.1128/aac.00810-23](https://doi.org/10.1128/aac.00810-23) | [37882514](https://pubmed.ncbi.nlm.nih.gov/37882514) | The study reports a population pharmacokinetic model for cefepime with explicit numeric values for CL, V1, Q, and V2 in the critically ill adult population. |
| `Bilal_2023.pdf` | Bilal M et al., Cefepime Population Pharmacokinetics, A…, Antimicrobial agents and ch… (2023) | popPK | 10 | [10.1128/aac.00309-23](https://doi.org/10.1128/aac.00309-23) | [37366614](https://pubmed.ncbi.nlm.nih.gov/37366614) | The paper describes a population PK study for cefepime, but the abstract provided does not contain the specific numeric parameter values (CL, V, etc.) required for extraction. |
| `Capparelli_2005.pdf` | Capparelli E et al., Population pharmacokinetics of cefepime…, Antimicrobial agents and ch… (2005) | popPK | 10 | [10.1128/AAC.49.7.2760-2766.2005](https://doi.org/10.1128/AAC.49.7.2760-2766.2005) | [15980347](https://pubmed.ncbi.nlm.nih.gov/15980347) | The study is a population PK analysis of cefepime in neonates reporting quantitative clearance and volume of distribution parameters in the text. |
| `Walker_2005.pdf` | Walker P et al., Subcutaneous administration of cefepime, Journal of pain and symptom… (2005) | popPK | 10 | [10.1016/j.jpainsymman.2005.03.007](https://doi.org/10.1016/j.jpainsymman.2005.03.007) | [16125032](https://pubmed.ncbi.nlm.nih.gov/16125032) | The study reports quantitative population pharmacokinetic parameters including clearance, half-life, and AUC for cefepime in human subjects. |
| `Al-Shaer_2022.pdf` | Al-Shaer MH et al., Applying Cefepime Population Pharmacoki…, Antimicrobial agents and ch… (2022) | popPK | 9 | [10.1128/AAC.01611-21](https://doi.org/10.1128/AAC.01611-21) | [34662194](https://pubmed.ncbi.nlm.nih.gov/34662194) | The paper describes a population PK model for cefepime in critically ill patients, but the specific numeric parameter values (CL, V, Q) are not provided in the extracted evidence. |
| `Pavia_2023.pdf` | Pavia K et al., Cefepime pharmacokinetics in critically…, The Journal of antimicrobia… (2023) | popPK | 9 | [10.1093/jac/dkad192](https://doi.org/10.1093/jac/dkad192) | [37466170](https://pubmed.ncbi.nlm.nih.gov/37466170) | The study reports specific clearance values and population PK model usage for cefepime, but volume of distribution and intercompartmental clearance are not explicitly quantified in the provided text. |
| `Mo_2022.pdf` | Mo Y et al., Evaluation of Individualized Cefepime D…, Journal of clinical pharmac… (2022) | popPK | 8 | [10.1002/jcph.1967](https://doi.org/10.1002/jcph.1967) | [34542174](https://pubmed.ncbi.nlm.nih.gov/34542174) | Study is a clinical evaluation of a population PK dosing strategy for cefepime, but the abstract provided does not list the specific quantitative PK parameter values (CL, V, etc.). |

<sub>queue written 2026-10-07T10:25:38.107912+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Shaer_2022 | irrelevant | 9 | 0 | The paper describes a population PK model for cefepime in critically ill patients, but the specific numeric parameter values (CL, V, Q) are not provided in the extracted evidence. |
| popPK | Bilal_2023 | relevant | 10 | 2 | The paper describes a population PK study for cefepime, but the abstract provided does not contain the specific numeric parameter values (CL, V, etc.) required for extraction. |
| popPK | Carcione_2026 | relevant | 4 | 2 | This is a review summarizing known cefepime PK parameters (Vd ~20 L, t1/2 ~2-2.3 h) but lacks original quantitative population modeling data or detailed clearance values. |
| popPK | Comini_2026 | irrelevant | 2 | 0 | The paper is a review focusing on the mechanisms of action, in vitro activity, and clinical evidence of cefepime combined with beta-lactamase inhibitors, rather than reporting original quantitative population pharmacokinetic parameter estimates (such as CL, V, or Q) for cefepime. |
| popPK | Darlow_2025 | irrelevant | 2 | 0 | The paper is a review of cefepime/enmetazobactam that discusses pharmacokinetic properties in general but does not provide specific quantitative disposition parameters (CL, V, t1/2) in the provided evidence. |
| popPK | Goutelle_2023 | irrelevant | 2 | 0 | This is a PK/PD simulation study that utilizes existing population PK models for cefepime to evaluate dosing regimens, but it does not report original quantitative PK parameter values (CL, V, etc.) for cefepime itself, referring instead to external literature references. |
| popPK | Igarashi_2023 | relevant | 4 | 1 | The study is an in vivo PK/PD investigation of cefepime in mice, but the extracted evidence only provides PK/PD index targets (fT &gt; MICi) and MICs, lacking specific quantitative disposition parameters like clearance or volume of distribution. |
| popPK | Lasko_2022 | irrelevant | 1 | 0 | The study reports pharmacodynamic efficacy (CFU counts) and MICs in a murine model, but does not provide quantitative pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Li_2023 | irrelevant | 4 | 2 | The study reports pharmacokinetic descriptors (Cmax, AUC) for cefepime but does not provide compartmental model parameters (CL, V, t1/2) or population PK estimates, which are required for extraction. |
| popPK | Lodise_2006 | irrelevant | 2 | 0 | The paper is a review discussing pharmacodynamic concepts and modeling applications for beta-lactams (including cefepime) but does not provide the specific quantitative pharmacokinetic parameter values (CL, V, etc.) in the extracted evidence. |
| popPK | Mo_2022 | relevant | 8 | 2 | Study is a clinical evaluation of a population PK dosing strategy for cefepime, but the abstract provided does not list the specific quantitative PK parameter values (CL, V, etc.). |
| popPK | Muller_2022 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic targets (%fT&gt;MIC) using an in vitro pharmacokinetic model and animal infection model, but does not report population-pharmacokinetic parameters such as clearance, volume of distribution, or half-life for cefepime. |
| popPK | Pavia_2023 | relevant | 9 | 3 | The study reports specific clearance values and population PK model usage for cefepime, but volume of distribution and intercompartmental clearance are not explicitly quantified in the provided text. |
| popPK | Valadez_2025 | relevant | 10 | 4 | The study reports a population PK model for cefepime with quantitative parameters (CL, Vd, half-life), but specific population mean values are located in Table 2 which is not fully provided in the evidence text. |
| popPK | Yalcin_2022 | relevant | 3 | 1 | This is a literature review that qualitatively discusses cefepime PK parameters in neonates on ECMO but does not provide the specific numeric values for cefepime's clearance, volume, or half-life in the provided evidence. |
| popPK | Zhanel_2019 | irrelevant | 0 | 0 | The paper is a review of cefiderocol, and cefepime is mentioned only as a structural or efficacy comparator with no pharmacokinetic parameters provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:25 UTC</sub>
