<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;flupirtine&quot;}]"></div>

# flupirtine

- **generic name:** flupirtine
- **ATC codes:** `N02BG07`
- **DrugBank:** [DB06623](https://go.drugbank.com/drugs/DB06623) · **PubChem:** [CID 53276](https://pubchem.ncbi.nlm.nih.gov/compound/53276)
- **molar mass:** 304.3195 g/mol (C15H17FN4O2) — DrugBank
- **groups:** investigational

## About

Flupirtine is a non-opioid analgesic that was used to treat pain.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415403](https://www.wikidata.org/wiki/Q415403) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| flupirtine | parent | 304.32 | C15H17FN4O2 | DrugBank | [53276](https://pubchem.ncbi.nlm.nih.gov/compound/53276) | Giorgi_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:10 | 2:45 | 0/1/0 | 7/0/0 | 1/0/2 | 281,217/13,052 | einfracz / qwen3.8-27b | 8 | 3/7 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.273), gpt-oss:120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Giorgi_2016_reference](drugs/drug_flupirtine/Flupirtine_Giorgi2016_reference.md) | — | 1-compartment (no model) | 2 | Giorgi M et al., Pharmacokinetics and disposition of flu…, Veterinary journal (London,… (2016) | [10.1016/j.tvjl.2015.08.019](https://doi.org/10.1016/j.tvjl.2015.08.019) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bientinesi_2017_relaxation_of_bethanechol_precontracted_strips](drugs/drug_flupirtine/pd_Bientinesi_2017_relaxation_of_bethanechol_precontracted_stri.md) | relaxation of bethanechol-precontracted strips ← Flupirtine · direct Emax (saturable) effect | — | Bientinesi R et al., KV7 channels in the human detrusor: cha…, Naunyn-Schmiedeberg's archi… (2017) | [10.1007/s00210-016-1312-9](https://doi.org/10.1007/s00210-016-1312-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Boscia_2006_DG_neuronal_death](drugs/drug_flupirtine/pd_Boscia_2006_DG_neuronal_death.md) | DG neuronal death ← flupirtine · inhibition effect | — | Boscia F et al., Retigabine and flupirtine exert neuropr…, Neuropharmacology (2006) | [10.1016/j.neuropharm.2006.03.024](https://doi.org/10.1016/j.neuropharm.2006.03.024) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Boscia_2006_SW_induced_ROS_production](drugs/drug_flupirtine/pd_Boscia_2006_SW_induced_ROS_production.md) | SW-induced ROS production ← flupirtine · inhibition effect | — | Boscia F et al., Retigabine and flupirtine exert neuropr…, Neuropharmacology (2006) | [10.1016/j.neuropharm.2006.03.024](https://doi.org/10.1016/j.neuropharm.2006.03.024) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Jakob_1997_K_ir](drugs/drug_flupirtine/pd_Jakob_1997_K_ir.md) | inwardly rectifying potassium current ← flupirtine · direct sigmoid Emax (Hill) effect | — | Jakob R et al., Influence of flupirtine on a G-protein…, British journal of pharmaco… (1997) | [10.1038/sj.bjp.0701519](https://doi.org/10.1038/sj.bjp.0701519) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">rat</span> | [Lee_2015_FLP_phase_II_antinociception](drugs/drug_flupirtine/pd_Lee_2015_FLP_phase_II_antinociception.md) | antinociceptive effect in phase II ← flupirtine · stimulation effect | — | Lee H et al., Synergistic interaction between tapenta…, European journal of pharmac… (2015) | [10.1016/j.ejphar.2015.05.064](https://doi.org/10.1016/j.ejphar.2015.05.064) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">goat</span> | [Naik_2018_percent_inhibition_of_tissue_activity_score](drugs/drug_flupirtine/pd_Naik_2018_percent_inhibition_of_tissue_activity_score.md) | percent inhibition of tissue activity score ← flupirtine maleate · direct sigmoid Emax (Hill) effect | — | Naik GS et al., Inhibition of Spontaneous Contractility…, International journal of ap… (2018) | [10.4103/ijabmr.IJABMR_159_17](https://doi.org/10.4103/ijabmr.IJABMR_159_17) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">rat</span> | [Swedberg_1988_discriminative_effects](drugs/drug_flupirtine/pd_Swedberg_1988_discriminative_effects.md) | discriminative effects ← flupirtine · stimulation effect | — | Swedberg MD et al., Pharmacological mechanisms of action of…, The Journal of pharmacology… (1988) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wu_2014_spontaneous_activity](drugs/drug_flupirtine/pd_Wu_2014_spontaneous_activity.md) | spontaneous activity ← flupirtine · direct Emax (saturable) effect | — | Wu C et al., Pharmacodynamics of potassium channel o…, European journal of pharmac… (2014) | [10.1016/j.ejphar.2014.03.017](https://doi.org/10.1016/j.ejphar.2014.03.017) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **UGT1A1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Siegmund_2015](drugs/drug_flupirtine/pgx_Siegmund_2015_UGT1A1_safety.md) | Siegmund W et al., Metabolic activation and analgesic effe…, British journal of clinical… (2015) | [10.1111/bcp.12522](https://doi.org/10.1111/bcp.12522) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 1/2</span> | **GSTP1** | `Q27` · CL/F | metabolism | [Siegmund_2015](drugs/drug_flupirtine/pgx_Siegmund_2015_GSTP1_Q27.md) | Siegmund W et al., Metabolic activation and analgesic effe…, British journal of clinical… (2015) | [10.1111/bcp.12522](https://doi.org/10.1111/bcp.12522) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **NAT2** | `Q27` · CL/F | metabolism | [Siegmund_2015](drugs/drug_flupirtine/pgx_Siegmund_2015_NAT2_Q27.md) | Siegmund W et al., Metabolic activation and analgesic effe…, British journal of clinical… (2015) | [10.1111/bcp.12522](https://doi.org/10.1111/bcp.12522) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 53 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `De_2014.pdf` | De Vito V et al., Pharmacokinetic profiles of the analges…, Veterinary journal (London,… (2014) | popPK | 10 | [10.1016/j.tvjl.2014.06.011](https://doi.org/10.1016/j.tvjl.2014.06.011) | [25011711](https://pubmed.ncbi.nlm.nih.gov/25011711) | The study reports quantitative PK parameters (bioavailability ~40%, detection up to 36h) for flupirtine in cats, but detailed numeric values for CL, V, and half-life are not present in the provided abstract evidence. |
| `Giorgi_2016.pdf` | Giorgi M et al., Pharmacokinetics and disposition of flu…, Veterinary journal (London,… (2016) | popPK | 10 | [10.1016/j.tvjl.2015.08.019](https://doi.org/10.1016/j.tvjl.2015.08.019) | [26681139](https://pubmed.ncbi.nlm.nih.gov/26681139) | The paper is a primary pharmacokinetic study in horses reporting specific numeric values for half-life and bioavailability, though it lacks explicit Clearance (CL) and Volume of Distribution (V) values in the provided text. |
| `Abrams_1988.pdf` | Abrams SM et al., Pharmacokinetics of flupirtine in elder…, Postgraduate medical journal (1988) | popPK | 9 | [10.1136/pgmj.64.751.361](https://doi.org/10.1136/pgmj.64.751.361) | [3200777](https://pubmed.ncbi.nlm.nih.gov/3200777) | The paper reports PK parameters (half-life, clearance) for flupirtine in humans, and the abstract provides specific quantitative values for creatinine clearance in the renal impairment group, though specific flupirtine clearance and half-life means are described qualitatively or by comparison without explicit numeric values for flupirtine itself in the provided text. |
| `Hlavica_1985.pdf` | Hlavica P et al., [Pharmacokinetics and biotransformation…, Arzneimittel-Forschung (1985) | popPK | 9 | not captured | [4039154](https://pubmed.ncbi.nlm.nih.gov/4039154) | The study reports PK parameters for flupirtine in humans (bioavailability, half-life), but specific values for clearance (CL) and volume (V) are not listed in the evidence text, likely residing in tables or figures not provided. |
| `De_2015_2.pdf` | De Vito V et al., Pharmacokinetic profiles of the analges…, Veterinary anaesthesia and… (2015) | popPK | 8 | [10.1111/vaa.12235](https://doi.org/10.1111/vaa.12235) | [25494625](https://pubmed.ncbi.nlm.nih.gov/25494625) | The study reports pharmacokinetic data for flupirtine in dogs, but the specific numeric disposition parameters (CL, V, ka) mentioned in the abstract are not provided in the extracted evidence. |
| `Wu_2014.pdf` | Wu C et al., Pharmacodynamics of potassium channel o…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.03.017](https://doi.org/10.1016/j.ejphar.2014.03.017) | [24681057](https://www.ncbi.nlm.nih.gov/pubmed/24681057) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T06:08:39.714845+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abrams_1988 | relevant | 9 | 4 | The paper reports PK parameters (half-life, clearance) for flupirtine in humans, and the abstract provides specific quantitative values for creatinine clearance in the renal impairment group, though specific flupirtine clearance and half-life means are described qualitatively or by comparison without explicit numeric values for flupirtine itself in the provided text. |
| popPK | Adduci_2013 | irrelevant | 0 | 0 | The study is a pharmacological investigation of KV7 channel effects on human taenia coli, not a pharmacokinetic study reporting disposition parameters for flupirtine. |
| popPK | Bientinesi_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacological mechanism of flupirtine as a KV7 channel modulator in human detrusor tissue (in vitro) and does not report pharmacokinetic parameters. |
| popPK | Bock_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on flupirtine analogues evaluating channel activity and toxicity mechanisms, not a pharmacokinetic study of flupirtine. |
| PD | Bock_2019 | not_relevant | 3 | 2 | The paper reports in vitro pharmacological potency (EC50) for a flupirtine analogue, not a pharmacokinetic-pharmacodynamic (PK/PD) or exposure-response relationship for flupirtine itself. |
| PGx | Cialone_2011 | not_relevant | 0 | 0 | The paper reports on clinical efficacy (disease progression) of flupirtine in JNCL, not a pharmacogenomic effect on PK/PD parameters. |
| popPK | De_2014 | relevant | 10 | 4 | The study reports quantitative PK parameters (bioavailability ~40%, detection up to 36h) for flupirtine in cats, but detailed numeric values for CL, V, and half-life are not present in the provided abstract evidence. |
| popPK | De_2015_2 | relevant | 8 | 0 | The study reports pharmacokinetic data for flupirtine in dogs, but the specific numeric disposition parameters (CL, V, ka) mentioned in the abstract are not provided in the extracted evidence. |
| PD | Harder_1994 | not_relevant | 1 | 0 | The study reports a lack of interaction between flupirtine and phenprocoumon using mean comparisons, but does not provide a concentration-effect or dose-response model with numeric PD parameters for flupirtine. |
| popPK | Hlavica_1985 | relevant | 9 | 2 | The study reports PK parameters for flupirtine in humans (bioavailability, half-life), but specific values for clearance (CL) and volume (V) are not listed in the evidence text, likely residing in tables or figures not provided. |
| popPK | Hsu_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper investigating ion channel mechanisms, and flupirtine is used only as a positive control agent, not for pharmacokinetic analysis. |
| PD | Hsu_2014 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of naringenin; flupirtine is only used as a positive control in electrophysiology experiments without any reported dose-response curve or numeric PD parameters for flupirtine itself. |
| PD | Huang_2013 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of diclofenac on potassium channels and only mentions flupirtine as a positive control for M-type K+ current enhancement without providing any concentration-effect data, IC50, or PD parameters for flupirtine. |
| popPK | Ipavec_2011 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of KV7 channels in rat gastric muscle, not a pharmacokinetic study reporting disposition parameters for flupirtine. |
| popPK | Jakob_1997 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiological study investigating the mechanism of action on potassium currents, not a pharmacokinetic study of drug disposition. |
| PD | Klawe_2009 | not_relevant | 1 | 0 | The paper is a narrative review of pharmacology and clinical applications, not a primary study reporting specific numeric PD parameters or exposure-response curves. |
| popPK | Lai_2019 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the effects of perampanel on ion channels, where flupirtine is used only as a pharmacological tool to modulate channel activity, not as a subject for pharmacokinetic analysis. |
| PD | Lai_2019 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters (IC50, Hill coefficient) for perampanel, not flupirtine; flupirtine is only used as a modulator in the experiments. |
| popPK | Lemmerhirt_2015 | irrelevant | 0 | 0 | The study is in vitro/mechanistic, focusing on oxidation potentials and channel activity rather than quantitative population-pharmacokinetic parameters (CL, V, etc.). |
| popPK | Lu_2019 | irrelevant | 0 | 0 | The paper is an electrophysiological study on tolvaptan's effect on potassium channels, where flupirtine is used only as a tool compound to reverse effects, and no pharmacokinetic parameters are reported. |
| PD | Lu_2019 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of tolvaptan, not flupirtine; flupirtine is only mentioned as a tool compound to reverse tolvaptan's effects on action potential firing, with no PD parameters reported for flupirtine itself. |
| popPK | Naik_2018 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of flupirtine's effect on goat ureter contractility, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Qian_2024 | irrelevant | 0 | 0 | The paper focuses on a novel KV7.2/7.3 agonist (compound 16), with flupirtine used only as a comparator control agent. |
| PD | Qian_2024 | not_relevant | 0 | 0 | The paper focuses on a novel compound (16) and only mentions flupirtine as a comparator for liver injury, providing no pharmacodynamic or exposure-response data for flupirtine. |
| popPK | Roberts_2016 | irrelevant | 0 | 0 | The paper is a computational QSP modeling study for Parkinson's disease where flupirtine is only mentioned as a drug with no clinical benefit, and no pharmacokinetic parameters are reported. |
| PD | Roberts_2016 | not_relevant | 1 | 0 | The paper is a QSP modeling study that qualitatively predicts the lack of clinical benefit for flupirtine but does not report specific numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve for the drug. |
| popPK | Sato_2022 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study of XE991 in rat neurons, using flupirtine only as a probe agent without reporting any pharmacokinetic parameters. |
| PD | Sato_2022 | not_relevant | 0 | 0 | The paper focuses on XE991 and only qualitatively mentions flupirtine without providing numeric PD parameters or a concentration-effect curve for it. |
| PGx | Scheuch_2015 | not_relevant | 0 | 0 | The paper reports the development and validation of an LC-MS/MS method to quantify flupirtine and its metabolites, not the pharmacogenomic results themselves. |
| PD | So_2014 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of midazolam, not flupirtine. |
| popPK | So_2019 | irrelevant | 0 | 0 | The paper is an electrophysiology study on ion channels where flupirtine is used only as a pharmacological tool to modulate currents, not as a subject for pharmacokinetic analysis. |
| PD | So_2019 | not_relevant | 0 | 0 | The paper reports pharmacological effects of bisoprolol on potassium currents, with flupirtine used only as a control agent; it does not report a PD or exposure-response relationship for flupirtine. |
| popPK | Surur_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on ligand-based drug design for KV7.2/3 activators, not a pharmacokinetic study, and contains no disposition parameters for flupirtine. |
| PD | Surur_2019 | not_relevant | 0 | 0 | The paper is a ligand-based drug design study reporting in vitro potency (EC50) for new analogs, not a pharmacokinetic or pharmacodynamic exposure-response analysis for flupirtine. |
| popPK | Tu_2015 | irrelevant | 0 | 0 | The paper is a neurophysiological study of retinal oscillations in mice where flupirtine is used only as a pharmacological tool to block M-type potassium channels, not as a subject of pharmacokinetic analysis. |
| PD | Tu_2015 | not_relevant | 2 | 1 | The paper uses flupirtine as a pharmacological tool to characterize retinal oscillation mechanisms, reporting only qualitative effects (inhibition of ON-SAC oscillation) without providing a dose-response curve, Emax, EC50, or any quantitative PD parameters. |
| popPK | Wu_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic analysis of K+ channel openers in neuronal networks and does not report pharmacokinetic parameters (CL, V, t1/2, etc.) for flupirtine. |
| popPK | Wurm_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro activity of nicotinamide analogs as new K_V7 channel openers, using flupirtine only as a structural reference for adverse liability, and contains no pharmacokinetic data. |
| popPK | de_2015 | relevant | 4 | 0 | The paper reports population PK ratios for flupirtine in humans but does not provide absolute quantitative parameters (like CL, V, ka) in the extracted evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:08 UTC</sub>
