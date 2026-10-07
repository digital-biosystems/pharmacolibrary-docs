<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;sevoflurane&quot;}]"></div>

# sevoflurane

- **generic name:** sevoflurane
- **ATC codes:** `N01AB08`
- **DrugBank:** [DB01236](https://go.drugbank.com/drugs/DB01236) · **PubChem:** [CID 5206](https://pubchem.ncbi.nlm.nih.gov/compound/5206)
- **molar mass:** 200.0548 g/mol (C4H3F7O) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Sevoflurane is an inhalational general anaesthetic used to induce and maintain anaesthesia during surgery. It is widely used in human medicine and is also an approved veterinary anaesthetic, commonly chosen for its rapid onset and pleasant induction.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419394](https://www.wikidata.org/wiki/Q419394) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:32 | 0:51 | 0/0/0 | 0/3/1 | 0/0/0 | 87,022/3,238 | einfracz / qwen3.8-27b | 15 | 3/3 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Goel_2019_intravenous_cannulation_attempt_and_movement](drugs/drug_sevoflurane/pd_Goel_2019_intravenous_cannulation_attempt_and_movement.md) | intravenous cannulation attempt and movement ← sevoflurane · categorical (graded) response model | — | Goel N et al., Sevoflurane EC50 for intravenous cannul…, Acta anaesthesiologica Scan… (2019) | [10.1111/aas.13363](https://doi.org/10.1111/aas.13363) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Han_2010_QTc](drugs/drug_sevoflurane/pd_Han_2010_QTc.md) | QTc ← sevoflurane · delayed effect through an effect compartment | — | Han DW et al., Modeling the effect of sevoflurane on c…, Anesthesiology (2010) | [10.1097/ALN.0b013e3181f26d34](https://doi.org/10.1097/ALN.0b013e3181f26d34) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kang_2021_TV](drugs/drug_sevoflurane/pd_Kang_2021_TV.md) | tidal volume ← sevoflurane · direct sigmoid Emax (Hill) effect | — | Kang P et al., A pharmacodynamic model of tidal volume…, Journal of pharmacokinetics… (2021) | [10.1007/s10928-020-09729-6](https://doi.org/10.1007/s10928-020-09729-6) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kreuer_2009_BIS](drugs/drug_sevoflurane/pd_Kreuer_2009_BIS.md) | Bispectral index ← sevoflurane · direct sigmoid Emax (Hill) effect | — | Kreuer S et al., Comparative pharmacodynamic modeling of…, Journal of clinical monitor… (2009) | [10.1007/s10877-009-9196-6](https://doi.org/10.1007/s10877-009-9196-6) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kreuer_2009_Narcotrend](drugs/drug_sevoflurane/pd_Kreuer_2009_Narcotrend.md) | Narcotrend index ← sevoflurane · direct sigmoid Emax (Hill) effect | — | Kreuer S et al., Comparative pharmacodynamic modeling of…, Journal of clinical monitor… (2009) | [10.1007/s10877-009-9196-6](https://doi.org/10.1007/s10877-009-9196-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sevoflurane) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` substrate, `CYP2E1` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ATP2C1 (inhibitor), CCDC51 (activator), GABRA1 (target), GLRA1 (target), GRIA1 (target), MT-ND1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 178 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cortínez_2018.pdf` | Cortínez LI et al., Modeling the pharmacokinetics and pharm…, Paediatric anaesthesia (2018) | popPK | 10 | [10.1111/pan.13465](https://doi.org/10.1111/pan.13465) | [30117213](https://pubmed.ncbi.nlm.nih.gov/30117213) | The paper describes a population PK model for sevoflurane in humans, but specific quantitative disposition parameters (like CL or V values) are not explicitly listed in the provided abstract, only derived metrics like half-time and EC50. |

<sub>queue written 2026-10-07T04:32:24.980786+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aantaa_2001 | irrelevant | 1 | 0 | The study reports effect concentration (EC50/EC95) values for airway management rather than pharmacokinetic disposition parameters (clearance, volume, etc.). |
| popPK | Braathen_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for propofol, while sevoflurane was only used for maintenance of anesthesia. |
| popPK | Cattai_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fentanyl in dogs, using sevoflurane only as a co-administered anesthetic agent. |
| popPK | Cortínez_2018 | relevant | 10 | 3 | The paper describes a population PK model for sevoflurane in humans, but specific quantitative disposition parameters (like CL or V values) are not explicitly listed in the provided abstract, only derived metrics like half-time and EC50. |
| popPK | Dholakia_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for midazolam, not sevoflurane, which is only used as an anesthetic agent. |
| popPK | Fedorov_2023 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of mitochondrial respiration inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Fuentes_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propofol and its interaction with remifentanil, with sevoflurane mentioned only as an induction agent. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for remimazolam and its metabolite CNS7054, not for sevoflurane (which was only used for anesthesia maintenance). |
| popPK | Goel_2019 | irrelevant | 0 | 0 | The study reports an EC50 (a pharmacodynamic endpoint) for movement response to cannulation, not quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Han_2010 | irrelevant | 2 | 0 | The study is a pharmacodynamic analysis of QTc prolongation, not a pharmacokinetic study reporting clearance, volume, or half-life for sevoflurane. |
| popPK | Kang_2021 | irrelevant | 2 | 1 | The study reports pharmacodynamic (PD) parameters (Emax model, ke0) for tidal volume, not quantitative pharmacokinetic (PK) disposition parameters (CL, V) for sevoflurane. |
| popPK | Kaullen_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the investigational neuromuscular blocking agent CW002, with sevoflurane serving only as the anesthetic agent used during data collection, not as the subject drug. |
| popPK | Kleijn_2011 | irrelevant | 1 | 0 | The study models the pharmacokinetics of rocuronium and sugammadex, where sevoflurane serves only as a dichotomous covariate affecting the pharmacodynamic effect (neuromuscular blockade) rather than being the subject of PK parameter estimation. |
| popPK | Kreuer_2007 | irrelevant | 2 | 0 | The text is a review discussing pharmacokinetic modeling concepts and effect-site kinetics ($k_{e0}$) rather than reporting quantitative disposition parameters (CL, V, Q) for sevoflurane. |
| popPK | Kreuer_2009 | irrelevant | 3 | 2 | The study focuses on pharmacodynamic modeling (effect compartment rate constant ke0) rather than reporting quantitative pharmacokinetic disposition parameters like clearance, volume, or intercompartmental clearance for sevoflurane. |
| popPK | Muta_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for propofol, not sevoflurane, which is used only as an anesthetic agent in the study. |
| popPK | Peyton_2020 | irrelevant | 1 | 0 | The study measures ventilation-perfusion heterogeneity (dead space fraction) rather than standard pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Ravichandran_2024 | irrelevant | 0 | 0 | This is a dose-finding study for intraocular pressure measurement in glaucoma, not a pharmacokinetic study reporting clearance, volume, or compartmental parameters for sevoflurane. |
| popPK | Schumacher_2009 | irrelevant | 0 | 0 | The study analyzes the pharmacodynamic interaction (EEG suppression and tolerance to stimulation) of propofol and sevoflurane, not the population-pharmacokinetic disposition parameters (CL, V) of sevoflurane. |
| popPK | Williams_2020 | irrelevant | 2 | 1 | This is a theoretical mathematical model of inhalation kinetics using standard solubility coefficients, not an experimental study reporting measured pharmacokinetic parameters like clearance or volume for sevoflurane. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
