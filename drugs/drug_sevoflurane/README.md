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

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sevoflurane).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` substrate, `CYP2E1` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ATP2C1 (inhibitor), CCDC51 (activator), GABRA1 (target), GLRA1 (target), GRIA1 (target), MT-ND1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 178 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
