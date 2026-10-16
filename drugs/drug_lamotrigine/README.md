<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;lamotrigine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lamotrigine_Chan2001_reference&quot;,&quot;label&quot;:&quot;Chan_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lamotrigine/Lamotrigine_Chan2001_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lamotrigine_Huo2025_base&quot;,&quot;label&quot;:&quot;Huo_2025_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lamotrigine/Lamotrigine_Huo2025_base.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lamotrigine_Huo2025_final&quot;,&quot;label&quot;:&quot;Huo_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lamotrigine/Lamotrigine_Huo2025_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Castel_Branco_2005_anticonvulsant_profile_against_maximal_el&quot;,&quot;label&quot;:&quot;Castel-Branco_2005 \u00b7 anticonvulsant profile against maximal electroshock seizure stimulation&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_lamotrigine/pd_Castel_Branco_2005_anticonvulsant_profile_against_maximal_el.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# lamotrigine

- **generic name:** lamotrigine
- **ATC codes:** `N03AX09`
- **DrugBank:** [DB00555](https://go.drugbank.com/drugs/DB00555) · **PubChem:** [CID 3878](https://pubchem.ncbi.nlm.nih.gov/compound/3878)
- **molar mass:** 256.091 g/mol (C9H7Cl2N5) — DrugBank
- **groups:** approved, investigational

## About

Lamotrigine is an anticonvulsant used to treat epilepsy and bipolar disorder, and has also been used for other neurological and psychiatric conditions. It is widely used and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410346](https://www.wikidata.org/wiki/Q410346) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lamotrigine | parent | 256.091 | C9H7Cl2N5 | DrugBank | [3878](https://pubchem.ncbi.nlm.nih.gov/compound/3878) | Chan_2001, Huo_2025, Karanam_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:22 | 3:49 | 0/2/4 | 2/0/1 | 0/0/0 | 220,940/17,622 | einfracz / qwen3.8-27b | 16 | 11/5 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Chan_2001_reference](drugs/drug_lamotrigine/Lamotrigine_Chan2001_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Chan V et al., Population pharmacokinetics of lamotrig…, Therapeutic drug monitoring (2001) | [10.1097/00007691-200112000-00006](https://doi.org/10.1097/00007691-200112000-00006) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Huo_2025_base](drugs/drug_lamotrigine/Lamotrigine_Huo2025_base.md) | ▶ model + simulator | 1-compartment, oral | 3 | Huo J et al., Dosing Optimization of Lamotrigine in P…, Drug design, development an… (2025) | [10.2147/DDDT.S541597](https://doi.org/10.2147/DDDT.S541597) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Huo_2025_final](drugs/drug_lamotrigine/Lamotrigine_Huo2025_final.md) | ▶ model + simulator | 1-compartment, oral | 3 | Huo J et al., Dosing Optimization of Lamotrigine in P…, Drug design, development an… (2025) | [10.2147/DDDT.S541597](https://doi.org/10.2147/DDDT.S541597) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Karanam_2025_reference](drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference.md) | — | 1-compartment (no model) | 1 | Karanam A et al., Characterization of lamotrigine disposi…, Pharmacotherapy (2025) | [10.1002/phar.4640](https://doi.org/10.1002/phar.4640) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.167). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Grasela_1999_reference](drugs/drug_lamotrigine/Lamotrigine_Grasela1999_reference.md) | — | 1-compartment (no model) | 0 | Grasela TH et al., Population pharmacokinetics of lamotrig…, Journal of clinical pharmac… (1999) | [10.1177/00912709922007949](https://doi.org/10.1177/00912709922007949) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Methaneethorn_2020_reference](drugs/drug_lamotrigine/Lamotrigine_Methaneethorn2020_reference.md) | — | 1-compartment (no model) | 0 | Methaneethorn J et al., Sources of lamotrigine pharmacokinetic…, Seizure (2020) | [10.1016/j.seizure.2020.07.014](https://doi.org/10.1016/j.seizure.2020.07.014) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Della_2000_TGS](drugs/drug_lamotrigine/pd_Della_2000_TGS.md) | threshold for generalized seizure activity ← lamotrigine · delayed effect through an effect compartment | — | Della Paschoa OE et al., Pharmacokinetic-pharmacodynamic correla…, Epilepsy research (2000) | [10.1016/s0920-1211(00)00102-9](https://doi.org/10.1016/s0920-1211(00)00102-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Della_2000_TLS](drugs/drug_lamotrigine/pd_Della_2000_TLS.md) | threshold for localized seizure activity ← lamotrigine · delayed effect through an effect compartment | — | Della Paschoa OE et al., Pharmacokinetic-pharmacodynamic correla…, Epilepsy research (2000) | [10.1016/s0920-1211(00)00102-9](https://doi.org/10.1016/s0920-1211(00)00102-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kim_2017_peak_amplitude_of_currents_induced_by_1_mM_DA](drugs/drug_lamotrigine/pd_Kim_2017_peak_amplitude_of_currents_induced_by_1_mM_DA.md) | peak amplitude of currents induced by 1 mM DA ← lamotrigine · direct sigmoid Emax (Hill) effect | — | Kim KJ et al., Lamotrigine, an antiepileptic drug, inh…, The Korean journal of physi… (2017) | [10.4196/kjpp.2017.21.2.169](https://doi.org/10.4196/kjpp.2017.21.2.169) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kim_2017_peak_amplitude_of_currents_induced_by_3_M_of_5_HT](drugs/drug_lamotrigine/pd_Kim_2017_peak_amplitude_of_currents_induced_by_3_M_of_5_HT.md) | peak amplitude of currents induced by 3 µM of 5-HT ← lamotrigine · direct sigmoid Emax (Hill) effect | — | Kim KJ et al., Lamotrigine, an antiepileptic drug, inh…, The Korean journal of physi… (2017) | [10.4196/kjpp.2017.21.2.169](https://doi.org/10.4196/kjpp.2017.21.2.169) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kim_2017_residual_currents_evoked_by_co_application_of_5_HT_10_M_and_5_HI_1_mM](drugs/drug_lamotrigine/pd_Kim_2017_residual_currents_evoked_by_co_application_of_5_HT_.md) | residual currents evoked by co-application of 5-HT (10 µM) and 5-HI (1 mM) ← lamotrigine · direct sigmoid Emax (Hill) effect | — | Kim KJ et al., Lamotrigine, an antiepileptic drug, inh…, The Korean journal of physi… (2017) | [10.4196/kjpp.2017.21.2.169](https://doi.org/10.4196/kjpp.2017.21.2.169) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kim_2017_rise_slope_of_5_HT3_receptor_currents](drugs/drug_lamotrigine/pd_Kim_2017_rise_slope_of_5_HT3_receptor_currents.md) | rise slope of 5-HT3 receptor currents ← lamotrigine · direct sigmoid Emax (Hill) effect | — | Kim KJ et al., Lamotrigine, an antiepileptic drug, inh…, The Korean journal of physi… (2017) | [10.4196/kjpp.2017.21.2.169](https://doi.org/10.4196/kjpp.2017.21.2.169) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Castel-Branco_2005_anticonvulsant_profile_against_maximal_electroshock_seizure_stimulation](drugs/drug_lamotrigine/pd_Castel_Branco_2005_anticonvulsant_profile_against_maximal_el.md) | anticonvulsant profile against maximal electroshock seizure stimulation ← lamotrigine · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Castel-Branco MM et al., Lamotrigine pharmacokinetic/pharmacodyn…, Fundamental & clinical phar… (2005) | [10.1111/j.1472-8206.2005.00380.x](https://doi.org/10.1111/j.1472-8206.2005.00380.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lamotrigine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | `SLC22A1` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADORA1 (inhibitor), ADORA2A (inhibitor), ADRA1A (inhibitor), ADRA2A (inhibitor), ADRB1 (inhibitor), CACNA1E (inhibitor), CHRNA1 (inhibitor), DHFR (inhibitor), DRD1 (inhibitor), DRD2 (inhibitor), DRD2 (target), GABRA1 (inducer), GABRA1 (inhibitor), GABRA1 (target), GRIA1 (inhibitor), HRH1 (target), HTR2A (inhibitor), HTR3A (inhibitor), OPRK1 (inhibitor), SCN11A (blocker), SCN1A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 100 matched, 20 returned
- **screened:** 20  ·  **relevant:** 5
- **records:** 6  ·  extracted 0  ·  needs_review 4  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Castel-Branco_2005.pdf` | Castel-Branco MM et al., Lamotrigine pharmacokinetic/pharmacodyn…, Fundamental & clinical phar… (2005) | popPK | 10 | [10.1111/j.1472-8206.2005.00380.x](https://doi.org/10.1111/j.1472-8206.2005.00380.x) | [16313279](https://pubmed.ncbi.nlm.nih.gov/16313279) | The study reports quantitative PK parameters (Vd, k_abs, k_el) for lamotrigine in rats, which are explicitly provided in the abstract text. |
| `Chan_2001.pdf` | Chan V et al., Population pharmacokinetics of lamotrig…, Therapeutic drug monitoring (2001) | popPK | 10 | [10.1097/00007691-200112000-00006](https://doi.org/10.1097/00007691-200112000-00006) | [11802095](https://pubmed.ncbi.nlm.nih.gov/11802095) | The study reports quantitative population PK parameters (CL/F, V/F) for lamotrigine in humans with values explicitly provided in the text. |
| `Grasela_1999.pdf` | Grasela TH et al., Population pharmacokinetics of lamotrig…, Journal of clinical pharmac… (1999) | popPK | 10 | [10.1177/00912709922007949](https://doi.org/10.1177/00912709922007949) | [10197296](https://pubmed.ncbi.nlm.nih.gov/10197296) | The paper reports population PK parameters (clearance) for lamotrigine, but only a mean value and percentage changes are provided in the text, while specific regression coefficients or full parameter estimates are likely in the body or tables not fully expanded here. |
| `Ramsay_1991.pdf` | Ramsay RE et al., Pharmacokinetics and safety of lamotrig…, Epilepsy research (1991) | popPK | 10 | [10.1016/0920-1211(91)90012-5](https://doi.org/10.1016/0920-1211(91)90012-5) | [1817959](https://pubmed.ncbi.nlm.nih.gov/1817959) | The evidence contains explicit numeric values for mean half-life (13.5 h), volume of distribution (1.36 l/kg), and clearance (1.27 ml/min/kg) for lamotrigine in humans. |
| `Yang_2024.pdf` | Yang H et al., Population Pharmacokinetics of Lamotrig…, Therapeutic drug monitoring (2024) | popPK | 10 | [10.1097/FTD.0000000000001207](https://doi.org/10.1097/FTD.0000000000001207) | [38666475](https://pubmed.ncbi.nlm.nih.gov/38666475) | The paper is a population PK study for lamotrigine in humans, but the specific numeric parameter values (e.g., clearance, volume) are missing from the provided evidence, likely omitted in the abstract text or residing in tables/supplementary material not included. |

<sub>queue written 2026-10-14T19:19:16.378501+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barbieri_2003 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology and in-vitro study on CHF3381, using lamotrigine only as a comparator drug without reporting any pharmacokinetic parameters for it. |
| popPK | Calabresi_2000 | irrelevant | 0 | 0 | This is an in vitro electrophysiology study investigating neuroprotection mechanisms; lamotrigine is tested for its functional effect on glutamate release, not for pharmacokinetic parameters. |
| popPK | Citraro_2016 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation in mice involving lamotrigine as a co-administered antiepileptic drug, with no reporting of quantitative PK parameters (CL, V, ka) for lamotrigine. |
| popPK | Della_2000 | irrelevant | 2 | 0 | The paper is a PK/PD study in animals (implied by the "cortical stimulation model" and lack of human clinical context, likely rats/mice) and while it mentions PK, the specific quantitative PK parameters (CL, V, ka) for lamotrigine are not present in the provided abstract/evidence. |
| popPK | Falcão_2012 | irrelevant | 1 | 0 | This study focuses on the pharmacokinetics of eslicarbazepine; while it notes a small interaction effect on lamotrigine clearance, it does not report quantitative PK parameters (CL, V, etc.) for lamotrigine itself. |
| popPK | Grasela_1999 | relevant | 10 | 4 | The paper reports population PK parameters (clearance) for lamotrigine, but only a mean value and percentage changes are provided in the text, while specific regression coefficients or full parameter estimates are likely in the body or tables not fully expanded here. |
| popPK | Jia_2025 | irrelevant | 4 | 0 | The paper is an external validation study that does not report the original population PK parameter estimates (CL, V, Q, ka) for the models, only performance metrics like IF30 values. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological mechanistic study of 5-HT3 receptor inhibition, not a pharmacokinetic study. |
| popPK | Kumar_2020 | irrelevant | 2 | 0 | The study is a pharmacodynamic/toxicity model validation in mice using lamotrigine to induce drug resistance, and while it mentions measuring lamotrigine levels, it reports no specific quantitative PK parameters (CL, V, etc.), only stating no significant difference in bioavailability. |
| popPK | Methaneethorn_2020 | relevant | 5 | 4 | Systematic review summarizing population PK parameters (CL, Vd, Ka) from 19 studies with ranges provided in text, but lacking specific point estimates from individual models. |
| popPK | Shah_2021 | irrelevant | 2 | 5 | The study reports basic PK metrics (Cmax, Tmax, AUC, half-life) from radiolabeled biodistribution and scintigraphy in animals, but lacks standard population-PK parameters like clearance (CL) or volume of distribution (V). |
| popPK | Tompson_2014 | irrelevant | 2 | 0 | The study focuses on retigabine as the subject drug; lamotrigine is a co-administered agent affecting retigabine PK, and no quantitative lamotrigine disposition parameters (CL, V, etc.) are reported. |
| popPK | Vivekanandam_2024 | irrelevant | 0 | 0 | The paper is a phase 3 clinical trial evaluating the efficacy of lamotrigine for myotonia, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Walsh_2021 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of lamotrigine's mechanism of action on ion channels, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Yang_2024 | relevant | 10 | 2 | The paper is a population PK study for lamotrigine in humans, but the specific numeric parameter values (e.g., clearance, volume) are missing from the provided evidence, likely omitted in the abstract text or residing in tables/supplementary material not included. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:19 UTC</sub>
