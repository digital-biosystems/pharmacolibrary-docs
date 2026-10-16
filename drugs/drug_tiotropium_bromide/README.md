<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;tiotropium bromide&quot;}]"></div>

# tiotropium bromide

- **generic name:** tiotropium bromide
- **ATC codes:** `R03AL06`, `R03AL10`, `R03BB04`
- **DrugBank:** [DB01409](https://go.drugbank.com/drugs/DB01409) · **PubChem:** [CID 5487427](https://pubchem.ncbi.nlm.nih.gov/compound/5487427)
- **molar mass:** 392.512 g/mol (C19H22NO4S2) — DrugBank
- **groups:** approved, investigational

## About

Tiotropium bromide is an inhaled anticholinergic bronchodilator used for obstructive airway and other lung diseases. It is an approved medicine and is widely used as a maintenance inhalation treatment for breathing disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424316](https://www.wikidata.org/wiki/Q424316) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:40 | 15:04 | 0/0/0 | 0/0/2 | 0/0/0 | 274,835/11,825 | ollama / qwen3.8:27b-mtp-q8_0 | 28 | 0/26 | 28/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Llanos-Paez_2023_FEV1](drugs/drug_tiotropium_bromide/pd_Llanos_Paez_2023_FEV1.md) | forced expiratory volume in one second ← tiotropium · direct Emax (saturable) effect | — | Llanos-Paez C et al., Joint longitudinal model-based meta-ana…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09853-z](https://doi.org/10.1007/s10928-023-09853-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by ollama:gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Llanos-Paez_2023_FEV1_2](drugs/drug_tiotropium_bromide/pd_Llanos_Paez_2023_FEV1_2.md) | forced expiratory volume in one second ← tiotropium · direct Emax (saturable) effect | — | Llanos-Paez C et al., Joint longitudinal model-based meta-ana…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09853-z](https://doi.org/10.1007/s10928-023-09853-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">mouse</span> | [Wollin_2010_bronchodilatory_activity](drugs/drug_tiotropium_bromide/pd_Wollin_2010_bronchodilatory_activity.md) | bronchodilatory activity ← tiotropium · direct Emax (saturable) effect | — | Wollin L et al., Tiotropium bromide exerts anti-inflamma…, Pulmonary pharmacology & th… (2010) | [10.1016/j.pupt.2010.03.008](https://doi.org/10.1016/j.pupt.2010.03.008) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">mouse</span> | [Wollin_2010_pulmonary_neutrophilic_inflammation](drugs/drug_tiotropium_bromide/pd_Wollin_2010_pulmonary_neutrophilic_inflammation.md) | pulmonary neutrophilic inflammation ← tiotropium · direct Emax (saturable) effect | — | Wollin L et al., Tiotropium bromide exerts anti-inflamma…, Pulmonary pharmacology & th… (2010) | [10.1016/j.pupt.2010.03.008](https://doi.org/10.1016/j.pupt.2010.03.008) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tiotropium_bromide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` substrate | DrugBank actor |
| absorption | small intestine | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 119 matched, 87 returned
- **screened:** 15  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sharma_2014.pdf` | Sharma A et al., Pooled analysis of tiotropium Respimat(…, Pulmonary pharmacology & th… (2014) | popPK | 9 | [10.1016/j.pupt.2014.08.004](https://doi.org/10.1016/j.pupt.2014.08.004) | [25161072](https://pubmed.ncbi.nlm.nih.gov/25161072) | The paper reports PK parameters for tiotropium in humans, but the specific numeric values for clearance, volume, or half-life are not present in the provided evidence, only concentration and urine excretion fractions. |
| `Borse_2025.pdf` | Borse K et al., Dendrimer-mediated proton sponge effect…, Drug delivery and translati… (2025) | popPK | 8 | [10.1007/s13346-024-01752-1](https://doi.org/10.1007/s13346-024-01752-1) | [39661313](https://pubmed.ncbi.nlm.nih.gov/39661313) | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, t1/2) for tiotropium bromide in a rat model. |
| `Perry_2019.pdf` | Perry J et al., Particle size and gastrointestinal abso…, British journal of clinical… (2019) | popPK | 8 | [10.1111/bcp.13831](https://doi.org/10.1111/bcp.13831) | [30521129](https://pubmed.ncbi.nlm.nih.gov/30521129) | The study reports pharmacokinetic parameters (Cmax, AUC) for tiotropium, but the specific numeric values are not present in the provided abstract text. |
| `Sharma_2017.pdf` | Sharma A et al., Pharmacokinetics of tiotropium administ…, Pulmonary pharmacology & th… (2017) | popPK | 8 | [10.1016/j.pupt.2016.12.003](https://doi.org/10.1016/j.pupt.2016.12.003) | [28039077](https://pubmed.ncbi.nlm.nih.gov/28039077) | The study reports quantitative PK parameters (AUC, Cmax, fe0-24) for tiotropium in humans, but specific numeric values are not present in the provided abstract text. |
| `Wang_2020.pdf` | Wang Z et al., Pharmacokinetics and safety of tiotropi…, Pulmonary pharmacology & th… (2020) | popPK | 8 | [10.1016/j.pupt.2020.101944](https://doi.org/10.1016/j.pupt.2020.101944) | [32916296](https://pubmed.ncbi.nlm.nih.gov/32916296) | The study reports PK parameters (accumulation ratios, Tmax) for tiotropium in humans, but specific quantitative values for clearance, volume, or half-life are not explicitly listed in the provided text. |
| `Singh_2018.pdf` | Singh D et al., The pharmacokinetics, pharmacodynamics…, British journal of clinical… (2018) | popPK | 5 | [10.1111/bcp.13645](https://doi.org/10.1111/bcp.13645) | [29790581](https://pubmed.ncbi.nlm.nih.gov/29790581) | A human PK study of tiotropium (PUR0200 vs HandiHaler) but the abstract gives no numeric PK parameters (Cmax, AUC, CL, t½), which likely appear in tables/figures not provided. |

<sub>queue written 2026-10-13T12:37:56.396327+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arzayus-Patiño_2026 | irrelevant | 0 | 0 | The paper is a systematic review of the effects of inhaled anticholinergics on bronchial secretions and mucociliary clearance, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for tiotropium. |
| popPK | Babu_2017 | irrelevant | 0 | 0 | The paper is a review of umeclidinium, and tiotropium is only mentioned as a historical comparator without providing specific quantitative PK parameters for it. |
| popPK | Barker_2017 | irrelevant | 0 | 0 | The paper is a survey and prescribing analysis of sputum clearance devices in COPD, not a pharmacokinetic study, and tiotropium is only mentioned as a prescribed medication. |
| popPK | Berlinski_2020 | irrelevant | 0 | 0 | The paper is a general review of aerosol therapy publications and mentions tiotropium only as a comparator in a clinical trial summary, without reporting any pharmacokinetic parameters. |
| popPK | Caillaud_2007 | irrelevant | 2 | 0 | The study is a clinical efficacy trial that reports urinary excretion data (Ae) in a figure not provided, but does not report quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Calverley_2016 | irrelevant | 0 | 0 | This is a bronchodilator efficacy (FEV1/FVC) comparison of tiotropium devices; no PK disposition parameters (CL, V, ka, half-life, population-PK model) are reported, only a mention that PK profiles were similar. |
| popPK | Church_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of umeclidinium, with tiotropium serving only as a comparator drug for which no quantitative PK parameters are reported. |
| popPK | Gregory_2010 | irrelevant | 0 | 0 | This is a clinical case report of an adverse event (tachycardia) and does not report quantitative pharmacokinetic parameters. |
| popPK | Hohlfeld_2014 | relevant | 4 | 5 | The study reports quantitative PK parameters (Cmax, AUC, tmax) for tiotropium in humans, but lacks compartmental model parameters (CL, V, ka) required for population PK extraction. |
| popPK | Katsumata_2022 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of tiotropium on ciliary function in vitro and in mice, not its pharmacokinetic disposition parameters. |
| popPK | Keam_2004 | irrelevant | 2 | 2 | A narrative review of tiotropium's clinical efficacy with only scattered descriptive PK values (Cmax, t½, bioavailability) and no compartmental/population-PK parameters. |
| popPK | Leal_2023 | irrelevant | 0 | 0 | The study is a population-wide analysis of polypharmacy and dosage adjustments in electronic health records, not a pharmacokinetic study, and tiotropium bromide is only mentioned as an example of a co-medication pair. |
| popPK | Llanos-Paez_2023 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of FEV1 efficacy and exacerbation rates in COPD, not a pharmacokinetic study, and contains no PK parameters for tiotropium. |
| popPK | Maesen_1995 | irrelevant | 2 | 0 | This is a pharmacodynamic (FEV1) dose-response study in COPD patients with no PK disposition parameters reported. |
| popPK | Matera_2020 | irrelevant | 2 | 0 | The paper is a review of pharmacokinetics for M3 antagonists and does not provide original quantitative parameter values for tiotropium in the evidence provided. |
| popPK | Olin_2005 | irrelevant | 2 | 0 | This is a review article that discusses pharmacokinetics qualitatively but does not report original quantitative disposition parameters (CL, V, ka) or a compartmental model. |
| popPK | Perry_2019 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (Cmax, AUC) for tiotropium, but the specific numeric values are not present in the provided abstract text. |
| popPK | Pleasants_2016 | irrelevant | 0 | 0 | The paper is a review of umeclidinium, and tiotropium is only mentioned as a comparator for efficacy, with no PK parameters reported for tiotropium. |
| popPK | Price_2009 | irrelevant | 2 | 0 | The paper is a review of previously done studies and does not report original quantitative pharmacokinetic parameter values in the provided text. |
| popPK | Rabe_2010 | irrelevant | 0 | 0 | The paper is a review of roflumilast, and tiotropium is only mentioned as a comparator drug in clinical trials, with no PK parameters reported for tiotropium. |
| popPK | Ramadan_2016 | irrelevant | 0 | 0 | The paper is a review of olodaterol, and tiotropium is only mentioned as a comparator in efficacy trials without any PK parameter reporting. |
| popPK | Sharma_2014 | relevant | 9 | 2 | The paper reports PK parameters for tiotropium in humans, but the specific numeric values for clearance, volume, or half-life are not present in the provided evidence, only concentration and urine excretion fractions. |
| popPK | Sharma_2017 | relevant | 8 | 2 | The study reports quantitative PK parameters (AUC, Cmax, fe0-24) for tiotropium in humans, but specific numeric values are not present in the provided abstract text. |
| popPK | Sharma_2018 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| popPK | Sims_2011 | irrelevant | 1 | 0 | The paper is a review of aclidinium bromide where tiotropium is used only as a comparator, and no quantitative PK parameters (CL, V, etc.) for tiotropium are reported. |
| popPK | Singh_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of glycopyrronium bromide, with tiotropium serving only as a comparator arm for lung function endpoints. |
| popPK | Singh_2018 | relevant | 5 | 2 | A human PK study of tiotropium (PUR0200 vs HandiHaler) but the abstract gives no numeric PK parameters (Cmax, AUC, CL, t½), which likely appear in tables/figures not provided. |
| popPK | Tagaya_2016 | irrelevant | 0 | 0 | The study evaluates clinical efficacy (mucus hypersecretion and airway clearance) in COPD patients and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for tiotropium. |
| popPK | Wang_2020 | relevant | 8 | 2 | The study reports PK parameters (accumulation ratios, Tmax) for tiotropium in humans, but specific quantitative values for clearance, volume, or half-life are not explicitly listed in the provided text. |
| popPK | Wang_2020_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mucin production in airway epithelial cells and does not report any pharmacokinetic parameters for tiotropium. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper is a narrative review of bronchiectasis that mentions tiotropium bromide only as a treatment in clinical trials, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Yaghi_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ciliary beat frequency, not a pharmacokinetic study, and reports no disposition parameters for tiotropium bromide. |
| popPK | van_2009 | irrelevant | 2 | 0 | The study is a clinical efficacy trial comparing delivery devices, and while it mentions pharmacokinetics were assessed in a subgroup, no quantitative PK parameters (CL, V, etc.) are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
