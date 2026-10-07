<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;azilsartan medoxomil&quot;}]"></div>

# azilsartan medoxomil

- **generic name:** azilsartan medoxomil
- **ATC codes:** `C09CA09`, `C09DA09`
- **DrugBank:** [DB08822](https://go.drugbank.com/drugs/DB08822) · **PubChem:** [CID 11238823](https://pubchem.ncbi.nlm.nih.gov/compound/11238823)
- **molar mass:** 568.5336 g/mol (C30H24N4O8) — DrugBank
- **groups:** approved, investigational

## About

Azilsartan medoxomil is an angiotensin II receptor blocker used to treat high blood pressure (arterial hypertension). It is an approved medicine, with an authorised product in the European Union, though another EU product has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1087888](https://www.wikidata.org/wiki/Q1087888) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| azilsartan | metabolite | 456.458 | C25H20N4O5 | PubChem | [135415867](https://pubchem.ncbi.nlm.nih.gov/compound/135415867) | Li_2020, Webb_2016 |
| azilsartan_medoxomil | metabolite | 568.534 | C30H24N4O8 | DrugBank | [11238823](https://pubchem.ncbi.nlm.nih.gov/compound/11238823) | Li_2020, Webb_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:22 | 13:40 | 0/3/1 | 0/0/0 | 0/0/0 | 133,553/49,328 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Li_2020_reference](drugs/drug_azilsartan_medoxomil/AzilsartanMedoxomil_Li2020_reference.md) | — | 1-compartment (no model) | 1 | Li X et al., Clinical Evaluation of the Tolerability…, Clinical pharmacology in dr… (2020) | [10.1002/cpdd.735](https://doi.org/10.1002/cpdd.735) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.538). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Webb_2016_cohort_1](drugs/drug_azilsartan_medoxomil/AzilsartanMedoxomil_Webb2016_cohort_1.md) | — | 1-compartment (no model) | 5 | Webb NJ et al., Single-dose pharmacokinetics and safety…, European journal of clinica… (2016) | [10.1007/s00228-015-1987-8](https://doi.org/10.1007/s00228-015-1987-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.538). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Webb_2016_cohort_2](drugs/drug_azilsartan_medoxomil/AzilsartanMedoxomil_Webb2016_cohort_2.md) | — | 1-compartment (no model) | 5 | Webb NJ et al., Single-dose pharmacokinetics and safety…, European journal of clinica… (2016) | [10.1007/s00228-015-1987-8](https://doi.org/10.1007/s00228-015-1987-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.538). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Webb_2016_cohort_3](drugs/drug_azilsartan_medoxomil/AzilsartanMedoxomil_Webb2016_cohort_3.md) | — | 1-compartment (no model) | 5 | Webb NJ et al., Single-dose pharmacokinetics and safety…, European journal of clinica… (2016) | [10.1007/s00228-015-1987-8](https://doi.org/10.1007/s00228-015-1987-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=azilsartan_medoxomil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C8` substrate, `CYP2C9` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AGTR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2020.pdf` | Li X et al., Clinical Evaluation of the Tolerability…, Clinical pharmacology in dr… (2020) | popPK | 10 | [10.1002/cpdd.735](https://doi.org/10.1002/cpdd.735) | [31553134](https://pubmed.ncbi.nlm.nih.gov/31553134) | The study reports population PK parameters for azilsartan (the active metabolite of azilsartan medoxomil) in humans, with a specific clearance value (1.63 L/h) provided in the abstract, though other parameters like volume and half-life are not explicitly listed in the text. |
| `Kumar_2017.pdf` | Kumar Puttrevu S et al., Pharmacokinetic-pharmacodynamic modelin…, Naunyn-Schmiedeberg's archi… (2017) | popPK | 8 | [10.1007/s00210-017-1339-6](https://doi.org/10.1007/s00210-017-1339-6) | [28190245](https://pubmed.ncbi.nlm.nih.gov/28190245) | The study reports a one-compartment PK model for azilsartan medoxomil in rats, but specific numeric parameter values (CL, V, ka) are not present in the provided text. |
| `Hjermitslev_2017.pdf` | Hjermitslev M et al., Azilsartan Medoxomil, an Angiotensin II…, Basic & clinical pharmacolo… (2017) | pd | 5 | [10.1111/bcpt.12800](https://doi.org/10.1111/bcpt.12800) | [28444983](https://www.ncbi.nlm.nih.gov/pubmed/28444983) | metadata signals extractable PD data (IC50) |
| `Tsai_2016.pdf` | Tsai MC et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2016) | pd | 5 | [10.1002/jcph.684](https://doi.org/10.1002/jcph.684) | [26632101](https://www.ncbi.nlm.nih.gov/pubmed/26632101) | metadata signals extractable PD data (Exposure-Response) |

<sub>queue written 2026-10-07T07:09:12.034264+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Majed_2020 | irrelevant | 0 | 0 | This is a review profile with no quantitative pharmacokinetic disposition parameters for azilsartan medoxomil. |
| PD | Al-Majed_2020 | not_relevant | 2 | 0 | A general drug profile/review mentions pharmacodynamics but reports no numeric dose- or exposure-response relationship or derivable PD parameters. |
| popPK | Angeloni_2016 | irrelevant | 1 | 0 | This is a review and provides no numeric azilsartan medoxomil disposition parameters. |
| PD | Angeloni_2016 | not_relevant | 2 | 0 | This is a qualitative review of antihypertensive efficacy; it reports no numeric dose- or exposure-response analysis or derivable PD parameters for azilsartan medoxomil. |
| popPK | Chae_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of olmesartan medoxomil, not azilsartan medoxomil. |
| PD | Chae_2014 | not_relevant | 0 | 0 | The paper models pharmacokinetics of olmesartan medoxomil and hydrochlorothiazide, but reports no azilsartan medoxomil exposure-response or dose-response analysis or numeric PD parameters. |
| popPK | Hjermitslev_2017 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Kumar_2017 | relevant | 8 | 2 | The study reports a one-compartment PK model for azilsartan medoxomil in rats, but specific numeric parameter values (CL, V, ka) are not present in the provided text. |
| PD | Kumar_2017 | not_relevant | 3 | 0 | The text describes an indirect-response PK/PD model and dose-level simulations, but provides no numeric PD parameters or effect-versus-concentration data to extract or derive. |
| popPK | Song_2016 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Song_2016 | not_relevant | 0 | 0 | The paper concerns olmesartan medoxomil, not azilsartan medoxomil. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The study investigates the antimicrobial mechanism of Candesartan cilexetil against MRSA and does not involve azilsartan medoxomil or its pharmacokinetics. |
| PD | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper studies candesartan cilexetil, not azilsartan medoxomil, and reports no PD relationship for azilsartan medoxomil. |
| popPK | Tsai_2016 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| PD | Webb_2016 | not_relevant | 0 | 0 | The paper reports pharmacokinetics, dosing simulations, and safety, but no blood-pressure or other pharmacodynamic exposure- or dose-response analysis. |
| popPK | Zaiken_2011 | irrelevant | 1 | 0 | This is a review and provides no quantitative disposition parameters for azilsartan medoxomil. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:09 UTC</sub>
