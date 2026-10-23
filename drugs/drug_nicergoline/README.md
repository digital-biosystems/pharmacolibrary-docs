<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;nicergoline&quot;}]"></div>

# nicergoline

- **generic name:** nicergoline
- **ATC codes:** `C04AE02`
- **DrugBank:** [DB00699](https://go.drugbank.com/drugs/DB00699) · **PubChem:** [CID 34040](https://pubchem.ncbi.nlm.nih.gov/compound/34040)
- **molar mass:** 484.386 g/mol (C24H26BrN3O3) — DrugBank
- **groups:** approved

## About

Nicergoline is a vasodilator and alpha blocker used to improve peripheral blood circulation. It is an approved drug, used in various countries for circulatory disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2623398](https://www.wikidata.org/wiki/Q2623398) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">rat</span> | [Perrier_1992_Ca_i](drugs/drug_nicergoline/pd_Perrier_1992_Ca_i.md) | intracellular calcium levels ← nicergoline · direct Emax (saturable) effect | — | Perrier ML et al., Dihydropyridine- and omega-conotoxin-re…, The Journal of pharmacology… (1992) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nicergoline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:28 | 1:16 | 0/0/0 | 0/1/0 | 0/0/0 | 18,585/1,123 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 32 matched, 31 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Carpéné_1983.pdf` | Carpéné C et al., [Evidence for an alpha 2-blocking prope…, Journal de pharmacologie (1983) | pd | 4 | not captured | [6132024](https://www.ncbi.nlm.nih.gov/pubmed/6132024) | metadata signals extractable PD data (EC50) |
| `Lanza_1986.pdf` | Lanza F et al., Potentiation by adrenaline of human pla…, Agents and actions (1986) | pd | 4 | [10.1007/BF01964968](https://doi.org/10.1007/BF01964968) | [3020942](https://www.ncbi.nlm.nih.gov/pubmed/3020942) | metadata signals extractable PD data (IC50) |
| `Moretti_1988.pdf` | Moretti A et al., Effect of ergolines on neurotransmitter…, Archives internationales de… (1988) | pd | 4 | not captured | [2906797](https://www.ncbi.nlm.nih.gov/pubmed/2906797) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T20:28:10.817541+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Benzi_1975 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of mitochondrial enzyme activity in rats, not a pharmacokinetic study, and reports no disposition parameters for nicergoline. |
| PD | Benzi_1975 | not_relevant | 1 | 0 | The paper describes qualitative pharmacodynamic effects of nicergoline on mitochondrial enzyme activity timing but provides no numeric PD parameters, concentration-effect curves, or quantitative dose-response data. |
| popPK | Caine_1984 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic alpha-adrenergic blocking effects of nicergoline on urinary tract muscle, not its pharmacokinetic disposition parameters. |
| popPK | Carpéné_1983 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| popPK | Ezan_2001 | irrelevant | 2 | 0 | The paper describes the development and validation of immunoassays for nicergoline and its metabolites but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) or a PK model. |
| popPK | Heitz_1986 | irrelevant | 0 | 0 | The study investigates pharmacodynamic effects (alpha-adrenoceptor and calcium antagonism) in rat isolated aorta, not pharmacokinetic disposition parameters. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The study is an in-vitro screening for corneal protection and does not report any pharmacokinetic parameters for nicergoline. |
| PD | Kim_2017 | not_relevant | 2 | 1 | The paper reports qualitative screening results and specific concentrations (20/100 μM) for viability, but does not provide a dose-response curve, Emax, or EC50 for nicergoline. |
| popPK | Kugler_1984 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on symptom improvement and does not report any pharmacokinetic parameters for nicergoline. |
| PD | Kugler_1984 | not_relevant | 1 | 0 | The paper describes a clinical observation study of symptom improvement over one year but does not report any concentration-effect data, dose-response curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | Kugler_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on EEG and psychometric outcomes, containing no pharmacokinetic parameters or quantitative disposition data for nicergoline. |
| PD | Kugler_1985 | not_relevant | 1 | 0 | The paper reports qualitative EEG changes and psychometric outcomes but provides no numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Lanza_1986 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| popPK | Liu_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of brimonidine in pig ciliary processes where nicergoline is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Liu_2002 | not_relevant | 0 | 0 | The paper investigates the mechanism of brimonidine's effect on nitrite production; nicergoline is used only as a single-dose control antagonist and no PD parameters or dose-response relationship for nicergoline are reported. |
| popPK | Lograno_2000 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay investigating pharmacodynamics, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mankovskiĭ_1989 | irrelevant | 0 | 0 | The study is a clinical trial assessing the therapeutic efficacy of nicergoline on cerebral circulation and EEG, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Moretti_1988 | irrelevant | 0 | 0 | The study focuses on in vitro receptor affinity and in vivo neurotransmitter turnover, not pharmacokinetic disposition parameters. |
| PD | Moretti_1988 | not_relevant | 3 | 2 | The paper reports in vitro receptor binding affinities (IC50) and qualitative changes in neurotransmitter turnover after fixed doses, but it does not provide a quantitative exposure-response or dose-response curve with derivable PD parameters like Emax or EC50 for the pharmacodynamic effect. |
| popPK | Nikolov_1987 | irrelevant | 0 | 0 | The study investigates the cerebroprotective pharmacodynamic effects of nicergoline in animal models of hypoxia/ischemia, not its pharmacokinetic parameters. |
| PD | Nikolov_1987 | not_relevant | 3 | 0 | The text describes a qualitative shift in the dose-response curve (synergism) but does not provide any numeric PD parameters, specific dose values, or extractable concentration-effect data. |
| popPK | Nikolov_1989 | irrelevant | 0 | 0 | The study investigates the cerebroprotective effects of prostacyclin and nicergoline is only a co-administered agent in a pharmacodynamic interaction study, with no pharmacokinetic parameters reported. |
| PD | Nikolov_1989 | not_relevant | 1 | 0 | The paper focuses on prostacyclin (PGI2) and only qualitatively mentions that nicergoline shifts the PGI2 dose-response curve, without providing any numeric PD parameters or concentration-effect data for nicergoline itself. |
| popPK | Perrier_1992 | irrelevant | 0 | 0 | The paper is a mechanistic study on calcium channels in rat brain slices where nicergoline is used as a pharmacological tool, not a pharmacokinetic study. |
| popPK | Saletu_1979 | irrelevant | 0 | 0 | no_text gate: only 180 chars of text extracted (&lt; 400) |
| popPK | Saletu_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic/EEG investigation of nicergoline's effects on brain activity and memory, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Saletu_1990 | not_relevant | 3 | 1 | The study reports qualitative EEG changes and peak times for two doses but does not provide numeric concentration-effect parameters or a fitted PD model. |
| popPK | Sanchez-Rodriguez_2024 | irrelevant | 0 | 0 | The paper is a neuroimaging and transcriptomic study of Alzheimer's disease and does not report pharmacokinetic parameters for nicergoline. |
| PD | Sanchez-Rodriguez_2024 | not_relevant | 0 | 0 | The paper focuses on computational modeling of Alzheimer's pathology (Aβ/tau) effects on fMRI signals and drug repurposing via transcriptomics; it does not report pharmacokinetic or pharmacodynamic data for nicergoline. |
| popPK | Sanderink_1997 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of riluzole, and nicergoline is only mentioned as a weak inhibitor of CYP1A2, with no pharmacokinetic parameters reported for nicergoline. |
| PD | Sanderink_1997 | not_relevant | 0 | 0 | The paper focuses on the in vitro metabolism of riluzole and mentions nicergoline only as a weak inhibitor of CYP1A2 (IC50 ~200-500 microM), which is a pharmacokinetic interaction parameter, not a pharmacodynamic exposure-response relationship for nicergoline. |
| PGx | Sanderink_1997 | not_relevant | 0 | 0 | The paper focuses on the metabolism of riluzole and only mentions nicergoline as a weak inhibitor of riluzole metabolism, without reporting any pharmacogenomic effects on nicergoline's PK or PD parameters. |
| popPK | Shintomi_1991 | irrelevant | 0 | 0 | The study is a pharmacological investigation of cerebral blood flow and blood gas changes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
