<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;dihydroergotamine&quot;}]"></div>

# dihydroergotamine

- **generic name:** dihydroergotamine
- **ATC codes:** `N02CA01`
- **DrugBank:** [DB00320](https://go.drugbank.com/drugs/DB00320) · **PubChem:** [CID 10531](https://pubchem.ncbi.nlm.nih.gov/compound/10531)
- **molar mass:** 583.6774 g/mol (C33H37N5O5) — DrugBank
- **groups:** approved

## About

Dihydroergotamine is an ergot alkaloid used to treat migraine and orthostatic hypotension. It is an approved medicine, though it carries a boxed warning, so its use requires caution.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421336](https://www.wikidata.org/wiki/Q421336) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dihydroergotamine | parent | 583.677 | C33H37N5O5 | DrugBank | [10531](https://pubchem.ncbi.nlm.nih.gov/compound/10531) | Schran_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:00 | 1:15 | 0/0/2 | 1/0/1 | 0/0/0 | 131,623/6,546 | einfracz / qwen3.8-27b | 6 | 4/2 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167), gpt-oss:120b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Hilke_1978_reference](drugs/drug_dihydroergotamine/Dihydroergotamine_Hilke1978_reference.md) | — | 1-compartment (no model) | 4 | Hilke H et al., Dihydroergotamine: pharmacokinetics and…, Acta anaesthesiologica Scan… (1978) | [10.1111/aas.1978.22.3.215](https://doi.org/10.1111/aas.1978.22.3.215) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Schran_1985_reference](drugs/drug_dihydroergotamine/Dihydroergotamine_Schran1985_reference.md) | — | 1-compartment (no model) | 3 | Schran HF et al., Pharmacokinetics of dihydroergotamine f…, International journal of cl… (1985) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Hanoun_2003_firing_of_serotoninergic_neurons](drugs/drug_dihydroergotamine/pd_Hanoun_2003_firing_of_serotoninergic_neurons.md) | firing of serotoninergic neurons ← dihydroergotamine · direct Emax (saturable) effect | — | Hanoun N et al., Dihydroergotamine and its metabolite, 8…, British journal of pharmaco… (2003) | [10.1038/sj.bjp.0705258](https://doi.org/10.1038/sj.bjp.0705258) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Hanoun_2003_specific_binding_of_3_H_8_OH_DPAT](drugs/drug_dihydroergotamine/pd_Hanoun_2003_specific_binding_of_3_H_8_OH_DPAT.md) | specific binding of [ 3 H]8-OH-DPAT ← dihydroergotamine · direct sigmoid Emax (Hill) effect | — | Hanoun N et al., Dihydroergotamine and its metabolite, 8…, British journal of pharmaco… (2003) | [10.1038/sj.bjp.0705258](https://doi.org/10.1038/sj.bjp.0705258) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Hanoun_2003_specific_binding_of_3_H_WAY_100635](drugs/drug_dihydroergotamine/pd_Hanoun_2003_specific_binding_of_3_H_WAY_100635.md) | specific binding of [ 3 H]WAY 100635 ← dihydroergotamine · direct sigmoid Emax (Hill) effect | — | Hanoun N et al., Dihydroergotamine and its metabolite, 8…, British journal of pharmaco… (2003) | [10.1038/sj.bjp.0705258](https://doi.org/10.1038/sj.bjp.0705258) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [MaassenVanDenBrink_1998_contraction](drugs/drug_dihydroergotamine/pd_MaassenVanDenBrink_1998_contraction.md) | coronary artery contraction ← dihydroergotamine · direct sigmoid Emax (Hill) effect | — | MaassenVanDenBrink A et al., Coronary side-effect potential of curre…, Circulation (1998) | [10.1161/01.cir.98.1.25](https://doi.org/10.1161/01.cir.98.1.25) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dihydroergotamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRB3 (target), DRD2 (target), DRD3 (target), DRD4 (target), HTR1A (target), HTR1B (target), HTR1D (target), HTR1E (target), HTR1F (target), HTR2A (target), HTR2B (target), HTR2C (target), HTR4 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 29 returned
- **screened:** 5  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hilke_1978.pdf` | Hilke H et al., Dihydroergotamine: pharmacokinetics and…, Acta anaesthesiologica Scan… (1978) | popPK | 10 | [10.1111/aas.1978.22.3.215](https://doi.org/10.1111/aas.1978.22.3.215) | [354304](https://pubmed.ncbi.nlm.nih.gov/354304) | The paper reports specific quantitative pharmacokinetic parameters (half-lives, volume of distribution, clearance) for dihydroergotamine in humans. |
| `Schran_1985.pdf` | Schran HF et al., Pharmacokinetics of dihydroergotamine f…, International journal of cl… (1985) | popPK | 10 | not captured | [3988387](https://pubmed.ncbi.nlm.nih.gov/3988387) | The study reports quantitative pharmacokinetic parameters (half-lives, volume, clearance) for dihydroergotamine in humans, with all values clearly visible in the provided abstract. |
| `Kitazawa_1998.pdf` | Kitazawa T et al., Involvement of 5-hydroxytryptamine7 rec…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0701583](https://doi.org/10.1038/sj.bjp.0701583) | [9489604](https://www.ncbi.nlm.nih.gov/pubmed/9489604) | metadata signals extractable PD data (EC50) |
| `Albrecht_2026.pdf` | Albrecht D et al., An Open-Label, 2-Period, Fixed Sequence…, Journal of clinical pharmac… (2026) | pgx | 7 | [10.1002/jcph.70239](https://doi.org/10.1002/jcph.70239) | [42530156](https://www.ncbi.nlm.nih.gov/pubmed/42530156) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Fung_2000.pdf` | Fung HB et al., Amprenavir: a new human immunodeficienc…, Clinical therapeutics (2000) | pgx | 7 | [10.1016/S0149-2918(00)80044-2](https://doi.org/10.1016/S0149-2918(00)80044-2) | [10868554](https://www.ncbi.nlm.nih.gov/pubmed/10868554) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Nakasa_1998.pdf` | Nakasa H et al., Prediction of drug-drug interactions of…, European journal of clinica… (1998) | pgx | 7 | [10.1007/s002280050442](https://doi.org/10.1007/s002280050442) | [9626925](https://www.ncbi.nlm.nih.gov/pubmed/9626925) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-10-15T03:59:29.663394+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Albrecht_2026 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction with a CYP3A4 inhibitor rather than the effect of a genetic variant on pharmacokinetics or pharmacodynamics. |
| popPK | Assié_1999 | irrelevant | 0 | 0 | The paper reports in-vitro receptor binding and functional assay data, not pharmacokinetic disposition parameters like clearance or volume. |
| PD | Assié_1999 | not_relevant | 1 | 0 | The paper discusses receptor binding affinities and qualitative intrinsic activity (Emax) comparisons but does not provide numeric concentration-effect curves or specific PD parameters for dihydroergotamine. |
| PGx | Ball_1992 | not_relevant | 0 | 0 | The paper focuses on the metabolic characterization of an ergot alkaloid analog (CQA 206-291) and does not report pharmacogenomic effects on the PK or PD parameters of dihydroergotamine. |
| PGx | Fung_2000 | not_relevant | 0 | 0 | The paper is a review of amprenavir and mentions dihydroergotamine only in the context of drug-drug interaction contraindications, without reporting pharmacogenomic effects or quantitative PK/PD parameters for dihydroergotamine. |
| popPK | Hanoun_2003 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of receptor binding and electrophysiology, not a pharmacokinetic study. |
| popPK | Inoue_2003 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT7 receptors in pig oviducts where dihydroergotamine is used only as a non-specific antagonist/probe, and no pharmacokinetic parameters are reported. |
| PD | Inoue_2003 | not_relevant | 1 | 0 | The paper investigates 5-HT receptor pharmacology in porcine oviducts; dihydroergotamine is only mentioned qualitatively as a less effective agonist without providing specific numeric PD parameters or concentration-effect curves for it. |
| PGx | Kellerman_2012 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction with CYP3A4 inhibitors, not the impact of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Kitazawa_1998 | irrelevant | 0 | 0 | The study is a mechanistic in vitro pharmacology investigation of 5-HT receptors in porcine myometrium, where dihydroergotamine is used only as a probe agonist and no PK parameters are reported. |
| PD | Kitazawa_1998 | not_relevant | 0 | 0 | The paper reports that dihydroergotamine had "almost no effect" on myometrial contractility at tested concentrations, providing no numeric PD parameters or concentration-effect curve for the drug. |
| popPK | MaassenVanDenBrink_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of coronary artery contraction and does not report pharmacokinetic parameters (clearance, volume, half-life) for dihydroergotamine. |
| popPK | McConnachie_2023 | irrelevant | 0 | 0 | The study is an in-vitro receptor pharmacology assessment (binding/functional activity) of dihydroergotamine, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mlinar_2003 | irrelevant | 0 | 0 | The study is an in vitro electrophysiological pharmacological characterization of 5-HT1B receptors in rat hippocampus, where dihydroergotamine is used only as an antagonist/co-agent, and no pharmacokinetic parameters are reported. |
| PD | Mlinar_2003 | not_relevant | 0 | 0 | The paper reports EC50 values for other 5-HT1B agonists (CP 93129, 5-CT, methylergometrine) but only mentions dihydroergotamine as a non-selective antagonist used to block effects, without providing any dose-response curve or numeric PD parameters for dihydroergotamine itself. |
| PGx | Moubarak_2003 | not_relevant | 0 | 0 | The study investigates CYP3A4 enzyme modulation in rat liver microsomes but does not report any genetic variants or pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of dihydroergotamine. |
| PGx | Nakasa_1998 | not_relevant | 0 | 0 | The study focuses on drug-drug interactions involving zonisamide and dihydroergotamine as a CYP3A4 inhibitor, not on pharmacogenomic effects on dihydroergotamine's PK/PD. |
| PGx | Rasmussen_1998 | not_relevant | 0 | 0 | The paper investigates the drug-drug interaction between fluvoxamine and proguanil using CYP2C19, and while dihydroergotamine is mentioned only as a CYP3A4 inhibitor in a negative control experiment, the study does not assess pharmacogenomic effects on dihydroergotamine. |
| popPK | Roon_1999 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of vascular contraction in bovine arteries, reporting receptor potency (pD2) and efficacy (Emax) rather than pharmacokinetic disposition parameters. |
| PGx | Rosenkrans_2015 | not_relevant | 2 | 5 | The study focuses on CYP450 inhibition by ergot alkaloids in cattle and genotype effects on that inhibition, not on the PK/PD of dihydroergotamine as a drug in humans. |
| popPK | Sampson_1977 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation where dihydroergotamine is used solely as a pharmacological antagonist, with no PK parameters reported. |
| popPK | Valentin_1998 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring contractile responses in isolated canine coronary arteries, not a pharmacokinetic study reporting disposition parameters for dihydroergotamine. |
| popPK | de_1986 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects (venous capacitance) and notes that plasma concentration profiles were comparable, but no specific quantitative pharmacokinetic parameters (CL, V, t1/2) or numeric concentration values are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:59 UTC</sub>
