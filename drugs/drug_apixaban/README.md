<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;apixaban&quot;}]"></div>

# apixaban

- **generic name:** apixaban
- **ATC codes:** `B01AF02`
- **DrugBank:** [DB06605](https://go.drugbank.com/drugs/DB06605) · **PubChem:** [CID 10182969](https://pubchem.ncbi.nlm.nih.gov/compound/10182969)
- **molar mass:** 459.4971 g/mol (C25H25N5O4) — DrugBank
- **groups:** approved, investigational

## About

Apixaban is an anticoagulant that blocks factor Xa and is used to prevent or treat blood clots, including venous thromboembolism, pulmonary embolism, thrombosis, stroke, and clot risk in atrial fibrillation or flutter and heart disease. It is an approved medicine, authorised in the European Union, and widely used for these conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414462](https://www.wikidata.org/wiki/Q414462) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| apixaban | parent | 459.497 | C25H25N5O4 | DrugBank | [10182969](https://pubchem.ncbi.nlm.nih.gov/compound/10182969) | Byon_2019, Kolowrat_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 13:51 | 8:36 | 0/3/1 | 0/0/0 | 0/0/0 | 79,026/33,870 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q63 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Byon_2019_reference](drugs/drug_apixaban/Apixaban_Byon2019_reference.md) | — | 2-compartment (no model) | 3 | Byon W et al., Apixaban: A Clinical Pharmacokinetic an…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00775-z](https://doi.org/10.1007/s40262-019-00775-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kolowrat_2025_reference](drugs/drug_apixaban/Apixaban_Kolowrat2025_reference.md) | — | 1-compartment (no model) | 2 | Kolowrat S et al., Real-World Impact of Amiodarone on Apix…, Clinical and translational… (2025) | [10.1111/cts.70392](https://doi.org/10.1111/cts.70392) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Konecki_2025_reference](drugs/drug_apixaban/Apixaban_Konecki2025_reference.md) | — | 1-compartment (no model) | 0 | Konecki C et al., Population Pharmacokinetic Modelling of…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01476-6](https://doi.org/10.1007/s40262-025-01476-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Morath_2025_reference](drugs/drug_apixaban/Apixaban_Morath2025_reference.md) | — | 1-compartment (no model) | 0 | Morath B et al., Effect of Amiodarone on Apixaban Exposu…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01534-z](https://doi.org/10.1007/s40262-025-01534-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=apixaban) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | heart | `CYP2J2` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP2J2` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: F10 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ajavon-Hartmann_2025.pdf` | Ajavon-Hartmann A et al., Characterization of Apixaban Pharmacoki…, Clinical pharmacology and t… (2025) | popPK | 10 | [10.1002/cpt.3689](https://doi.org/10.1002/cpt.3689) | [40551722](https://pubmed.ncbi.nlm.nih.gov/40551722) | The paper describes a population PK model for apixaban in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Gaspar_2023.pdf` | Gaspar F et al., Population pharmacokinetics of apixaban…, CPT: pharmacometrics & syst… (2023) | popPK | 10 | [10.1002/psp4.13032](https://doi.org/10.1002/psp4.13032) | [37723920](https://pubmed.ncbi.nlm.nih.gov/37723920) | The study is a population PK analysis of apixaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Kolowrat_2025.pdf` | Kolowrat S et al., Real-World Impact of Amiodarone on Apix…, Clinical and translational… (2025) | popPK | 10 | [10.1111/cts.70392](https://doi.org/10.1111/cts.70392) | [41208245](https://pubmed.ncbi.nlm.nih.gov/41208245) | The study reports a population PK model for apixaban with specific quantitative findings, including a 33% decrease in clearance and geometric mean ratios for exposure metrics. |
| `Konecki_2025.pdf` | Konecki C et al., Population Pharmacokinetic Modelling of…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-025-01476-6](https://doi.org/10.1007/s40262-025-01476-6) | [39853633](https://pubmed.ncbi.nlm.nih.gov/39853633) | The study reports a population PK model for apixaban with a specific dialytic clearance value (1.20 L/h), but other key parameters like total clearance, volume, and half-life are not explicitly listed in the provided text. |
| `Morath_2025.pdf` | Morath B et al., Effect of Amiodarone on Apixaban Exposu…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-025-01534-z](https://doi.org/10.1007/s40262-025-01534-z) | [40474043](https://pubmed.ncbi.nlm.nih.gov/40474043) | The study reports a population PK model for apixaban with explicit numeric values for CL/F, Vd/F, and ka in the abstract. |
| `Jaber_2022.pdf` | Jaber A et al., Esomeprazole and apixaban pharmacokinet…, Heliyon (2022) | popPK | 8 | [10.1016/j.heliyon.2022.e11015](https://doi.org/10.1016/j.heliyon.2022.e11015) | [36281394](https://pubmed.ncbi.nlm.nih.gov/36281394) | The study reports non-compartmental PK parameters (Cmax, AUC, Tmax) for apixaban in rats, but specific numeric values are not present in the provided text. |

<sub>queue written 2026-10-05T13:43:04.514578+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajavon-Hartmann_2025 | relevant | 10 | 0 | The paper describes a population PK model for apixaban in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Gaspar_2023 | relevant | 10 | 0 | The study is a population PK analysis of apixaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Jaber_2022 | relevant | 8 | 2 | The study reports non-compartmental PK parameters (Cmax, AUC, Tmax) for apixaban in rats, but specific numeric values are not present in the provided text. |
| popPK | Terrier_2022 | irrelevant | 2 | 0 | This is a systematic review that summarizes existing models but does not report original quantitative PK parameter values for apixaban in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 13:43 UTC</sub>
