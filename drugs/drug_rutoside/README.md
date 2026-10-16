<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;rutoside&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut&quot;,&quot;label&quot;:&quot;Dom\u00ednguez_2024_extract_equivalent_to_7_4_mg_kg_of_rutin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# rutoside

- **generic name:** rutoside
- **ATC codes:** `C05CA01`
- **DrugBank:** [DB01698](https://go.drugbank.com/drugs/DB01698) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Rutoside (rutin), a bioflavonoid, is used as a vasoprotective and capillary-stabilizing agent for circulatory conditions. It remains in use and is approved, though it is also being investigated for other purposes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407857](https://www.wikidata.org/wiki/Q407857) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rutin (rutoside) | parent | 610.521 | C27H30O16 | PubChem | [5280805](https://pubchem.ncbi.nlm.nih.gov/compound/5280805) | Domínguez_2021, Domínguez_2024, Tian_2022 |
| quercetin | metabolite | 302.238 | C15H10O7 | PubChem | [5280343](https://pubchem.ncbi.nlm.nih.gov/compound/5280343) | Domínguez_2021, Domínguez_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:11 | 7:41 | 0/8/2 | 0/0/0 | 0/0/0 | 471,457/36,258 | einfracz / qwen3.8-27b | 18 | 4/14 | 16/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.389), gpt-oss:120b (not confirmed, agreement 0.158). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Domínguez_2021_stochastic_approximation](drugs/drug_rutoside/Rutoside_Domnguez2021_stochastic_approximation.md) | — | parent + metabolite (no model) | 7 | Domínguez Moré GP et al., Matrix Effects of the Hydroethanolic Ex…, Pharmaceutics (2021) | [10.3390/pharmaceutics13040535](https://doi.org/10.3390/pharmaceutics13040535) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.75), gpt-oss:120b (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">other organism</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Ma_2024_reference](drugs/drug_rutoside/Rutoside_Ma2024_reference.md) | — | 1-compartment (no model) | 2 | Ma P et al., Lonicerae Japonicae Flos with the homol…, Frontiers in oncology (2024) | [10.3389/fonc.2024.1446328](https://doi.org/10.3389/fonc.2024.1446328) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Domínguez_2021_rutin](drugs/drug_rutoside/Rutoside_Domnguez2021_rutin.md) | — | parent + metabolite (no model) | 13 | Domínguez Moré GP et al., Matrix Effects of the Hydroethanolic Ex…, Pharmaceutics (2021) | [10.3390/pharmaceutics13040535](https://doi.org/10.3390/pharmaceutics13040535) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.412), gpt-oss:120b (not confirmed, agreement 0.15). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Domínguez_2021_value](drugs/drug_rutoside/Rutoside_Domnguez2021_value.md) | — | parent + metabolite (no model) | 7 | Domínguez Moré GP et al., Matrix Effects of the Hydroethanolic Ex…, Pharmaceutics (2021) | [10.3390/pharmaceutics13040535](https://doi.org/10.3390/pharmaceutics13040535) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.158), gpt-oss:120b (partly confirmed, agreement 0.211). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [Domínguez_2024_extract_equivalent_to_7_4_mg_kg_of_rutin](drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut.md) | ▶ model + simulator | 1-compartment, IV | 7 | Domínguez Moré GP et al., Rutin and Physalis peruviana Extract: P…, Pharmaceutics (2024) | [10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.083), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Domínguez_2024_intravenous_administration_i_v](drugs/drug_rutoside/Rutoside_Domnguez2024_intravenous_administration_i_v.md) | — | parent + metabolite (no model) | 10 | Domínguez Moré GP et al., Rutin and Physalis peruviana Extract: P…, Pharmaceutics (2024) | [10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154), gpt-oss:120b (not confirmed, agreement 0.13). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Domínguez_2024_oral_administration_p_o](drugs/drug_rutoside/Rutoside_Domnguez2024_oral_administration_p_o.md) | — | parent + metabolite (no model) | 11 | Domínguez Moré GP et al., Rutin and Physalis peruviana Extract: P…, Pharmaceutics (2024) | [10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.091), gpt-oss:120b (not confirmed, agreement 0.15). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Domínguez_2024_pure_rutin_100_mg_kg](drugs/drug_rutoside/Rutoside_Domnguez2024_pure_rutin_100_mg_kg.md) | — | parent + metabolite (no model) | 9 | Domínguez Moré GP et al., Rutin and Physalis peruviana Extract: P…, Pharmaceutics (2024) | [10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.769), gpt-oss:120b (partly confirmed, agreement 0.769). Primary extraction retained.">cross-check: partial 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Nurfaradilla_2020_reference](drugs/drug_rutoside/Rutoside_Nurfaradilla2020_reference.md) | — | 1-compartment (no model) | 2 | Nurfaradilla SA et al., Pharmacokinetic Herb-Drug Interaction b…, Evidence-based complementar… (2020) | [10.1155/2020/5013898](https://doi.org/10.1155/2020/5013898) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Tian_2022_reference](drugs/drug_rutoside/Rutoside_Tian2022_reference.md) | — | 1-compartment (no model) | 7 | Tian C et al., The protective effect of rutin against…, Journal of pharmaceutical a… (2022) | [10.1016/j.jpba.2021.114480](https://doi.org/10.1016/j.jpba.2021.114480) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rutoside).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: AKR1C3 (inhibitor), CBR1 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 191 matched, 71 returned
- **screened:** 8  ·  **relevant:** 1
- **records:** 10  ·  extracted 0  ·  needs_review 2  ·  rejected 8  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gupta_2020.pdf` | Gupta SK et al., Effect of rutin on retinal VEGF, TNF-α,…, International ophthalmology (2020) | popPK | 7 | [10.1007/s10792-019-01165-x](https://doi.org/10.1007/s10792-019-01165-x) | [31456155](https://pubmed.ncbi.nlm.nih.gov/31456155) | The study reports ocular pharmacokinetics for rutin (the aglycone of rutoside) in rats, but specific quantitative disposition parameters (CL, V, T1/2) are not present in the provided text. |
| `Dittrich_1985.pdf` | Dittrich P et al., [HPLC determination of troxerutin in pl…, Arzneimittel-Forschung (1985) | popPK | 6 | not captured | [4015744](https://pubmed.ncbi.nlm.nih.gov/4015744) | The paper describes the pharmacokinetics of troxerutin (a rutoside derivative) in humans but provides only relative bioavailability percentages in the abstract, with no specific CL, V, or t1/2 values extracted in the evidence provided. |
| `Sawai_1987.pdf` | Sawai Y et al., Serum concentrations of rutoside metabo…, Arzneimittel-Forschung (1987) | popPK | 5 | not captured | [3663272](https://pubmed.ncbi.nlm.nih.gov/3663272) | Study reports pharmacokinetics of rutoside metabolites in humans with some quantitative data (half-life, excretion), but not standard compartmental parameters for rutoside itself. |
| `Tian_2022.pdf` | Tian C et al., The protective effect of rutin against…, Journal of pharmaceutical a… (2022) | popPK | 5 | [10.1016/j.jpba.2021.114480](https://doi.org/10.1016/j.jpba.2021.114480) | [34839052](https://pubmed.ncbi.nlm.nih.gov/34839052) | The paper reports pharmacokinetic parameters for the drug "Rutin", which is a different compound from the subject drug "Rutoside" (a mixture of three rhamnosylquercetin isomers). |
| `Lemmens_2014.pdf` | Lemmens KJ et al., The flavonoid 7-mono-O-(β-hydroxyethyl)…, Toxicology in vitro : an in… (2014) | pd | 4 | [10.1016/j.tiv.2013.12.019](https://doi.org/10.1016/j.tiv.2013.12.019) | [24412621](https://www.ncbi.nlm.nih.gov/pubmed/24412621) | metadata signals extractable PD data (EC50) |
| `Müller_1998.pdf` | Müller K et al., Ilex aquifolium: protection against enz…, Planta medica (1998) | pd | 4 | [10.1055/s-2006-957509](https://doi.org/10.1055/s-2006-957509) | [9741300](https://www.ncbi.nlm.nih.gov/pubmed/9741300) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-15T00:05:17.220109+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2024 | irrelevant | 0 | 0 | The study focuses on oxovanadium(IV) complexes and uses rutin (a related flavonoid glycoside) only as a comparator or standard, not rutoside, and involves in silico predictions rather than rutoside PK data. |
| popPK | Borzeix_1995 | irrelevant | 0 | 0 | The study is a hemodynamic/physiological investigation of venous and lymphatic flow in rabbits, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Cermak_2010 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| popPK | Chen_2026 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of Laportea bulbifera extract and its components in rats, not the specific drug rutoside. |
| PD | Costea_2022 | not_relevant | 1 | 0 | Rutoside is only quantified as an extract constituent; the IC50 dose-response values are for whole vegetal extracts in in vitro antioxidant assays, not for rutoside itself, and no rutoside exposure-effect or PK/PD relationship is reported. |
| popPK | Dittrich_1985 | relevant | 6 | 0 | The paper describes the pharmacokinetics of troxerutin (a rutoside derivative) in humans but provides only relative bioavailability percentages in the abstract, with no specific CL, V, or t1/2 values extracted in the evidence provided. |
| popPK | Domínguez_2021 | irrelevant | 1 | 1 | The study investigates rutin (quercetin-3-O-rutinoside), not rutoside (quercetin-3-O-rutinoside-7-O-rutinoside); they are distinct molecules, and all PK parameters reported are for rutin or its metabolite quercetin. |
| popPK | Domínguez_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rutin (quercetin-3-O-rutinoside) in rabbits, not for rutoside (a different tri-O-glycoside of quercetin). |
| popPK | Gerdin_1983 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (microvascular permeability) rather than quantitative pharmacokinetic disposition parameters for rutoside. |
| PD | Ghica_2023 | not_relevant | 0 | 0 | Rutoside is only used as a calibration standard for total flavonoid content; no pharmacodynamic or exposure-response relationship for rutoside is reported. |
| popPK | Griffiths_1978 | relevant | 8 | 3 | The paper reports the distribution and excretion of rutoside in mice, which is a pharmacokinetic study, but it provides only qualitative distribution data and percentages in feces/urine/bile rather than standard compartmental parameters (CL, V, t1/2) or a population model. |
| popPK | Gupta_2020 | relevant | 7 | 0 | The study reports ocular pharmacokinetics for rutin (the aglycone of rutoside) in rats, but specific quantitative disposition parameters (CL, V, T1/2) are not present in the provided text. |
| popPK | He_2026 | irrelevant | 2 | 2 | This is a review article focused on rutin (not rutoside) and primarily discusses metabolite kinetics rather than original quantitative disposition parameters (CL, V, etc.) for the parent drug. |
| PD | Hosseini_2025 | not_relevant | 1 | 1 | Only in vitro IC50 bioassay values (antioxidant/cytotoxic/protease inhibition) for isolated compounds including quercetin-3-O-rutoside; no PK, exposure-response, or dose-effect PD modeling. |
| popPK | Hou_2023 | irrelevant | 0 | 0 | The study analyzes flavonoid biosynthesis in plants and does not report pharmacokinetic parameters for rutoside. |
| popPK | Jebahi_2025 | irrelevant | 0 | 0 | The study focuses on the synthesis and properties of Zinc Oxide nanoparticles, not the pharmacokinetics of the drug rutoside. |
| popPK | Lai_2022 | irrelevant | 0 | 0 | The paper is a network pharmacology and molecular docking study on Houttuynia cordata for radiation-induced lung injury, focusing on compounds like quercetin and rutin, with no pharmacokinetic data for rutoside. |
| popPK | Lemmens_2014 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Lemmens_2014 | not_relevant | 0 | 0 | The text describes a qualitative antioxidant mechanism of action for rutoside on endothelial cells but does not report any quantitative exposure-response, dose-response, or PK/PD analysis with numeric parameters. |
| popPK | Lemmens_2015 | irrelevant | 0 | 0 | The paper focuses on the antioxidant activity and thiol reactivity of a rutoside derivative's metabolite, containing no pharmacokinetic disposition parameters. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper is an in-silico study on osteomyelitis phytochemicals (mentioning rutin/rutoside-like compounds only in the context of molecular docking and general ADME properties) and does not contain pharmacokinetic parameters for rutoside. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | The study investigates the antimicrobial and toxicity mitigation effects of rutin (not rutoside) as an antibiotic adjuvant, without reporting pharmacokinetic parameters. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | The paper is a review of Lonicerae Japonicae Flos (LJF) and does not study rutoside; any mention of PK parameters pertains to other compounds like rutin or luteoloside. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of components in Rubi Fructus, and while rutin (rutoside) is listed as a detected compound, the provided text only reports specific kinetic values (Cmax, T1/2) for ellagic acid, not for rutoside. |
| popPK | Mashaal_2025 | irrelevant | 0 | 0 | The paper studies the pharmacological effects of star anise extract on snails and does not report pharmacokinetic parameters for rutoside. |
| popPK | Metuge_2024 | irrelevant | 0 | 0 | The paper is a molecular docking and dynamics study on phytochemicals and enzymes, containing no pharmacokinetic data for rutoside. |
| popPK | Mohamed_2024 | irrelevant | 0 | 0 | The study focuses on kidney stone formation and mentions rutin (a related compound) only in the context of molecular docking, providing no pharmacokinetic parameters for rutoside. |
| popPK | Morquette_2021 | irrelevant | 0 | 0 | The paper is a clinical case report on the therapeutic efficacy of rutoside for a dermatological condition and contains no pharmacokinetic parameters. |
| popPK | Méabed_2018 | irrelevant | 0 | 0 | The study evaluates the giardicidal effectiveness and chemical composition of Cymbopogon citratus extract, not the pharmacokinetics of rutoside. |
| PD | Müller_1998 | not_relevant | 1 | 0 | The paper reports an IC50 for the whole plant extract, not for rutoside specifically, and explicitly states that rutoside did not mediate the leukotriene inhibition; no numeric PD parameters for rutoside are provided. |
| popPK | Nocker_1987 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| popPK | Nocker_1989 | irrelevant | 0 | 0 | The study is a clinical efficacy trial assessing antioedematous effects and does not report any quantitative pharmacokinetic parameters. |
| PD | Nocker_1989 | not_relevant | 3 | 2 | The study is a dose-response trial but reports only qualitative/summary outcomes (significant decrease vs placebo, no difference between dose groups) without providing numeric concentration-effect data, PK parameters, or fitted PD model parameters (Emax, EC50, etc.). |
| popPK | Nurfaradilla_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of captopril in rats, not rutoside. |
| popPK | Ollech_2020 | irrelevant | 0 | 0 | This is a clinical retrospective cohort study focusing on the treatment of dermatosis, not a pharmacokinetic study; no disposition parameters are reported. |
| PGx | Paczkowska-Walendowska_2026 | not_relevant | 0 | 0 | The text is a general review of the plant Styphnolobium japonicum and its compounds (including rutoside) with no reported pharmacogenomic analysis affecting PK/PD parameters of rutoside. |
| PD | Raman_2024 | not_relevant | 2 | 3 | Only an in vitro enzyme-inhibition IC50 (Rutin 17.50 μM vs 3CL protease) from a docking/MD study; no in vivo exposure- or dose-response/PK-PD relationship for rutoside. |
| popPK | Ramaswamy_2017 | relevant | 4 | 1 | The study reports an in vivo PK profile for rutin (structurally identical to rutoside) in rabbits, but only provides fold-increase in bioavailability values rather than specific parameters like CL, V, or half-life. |
| popPK | Rashid_2024 | irrelevant | 0 | 0 | The study is an in-silico screening for SARS-CoV-2 inhibitors involving rutin (closely related to rutoside) and does not report pharmacokinetic parameters for rutoside. |
| popPK | STRUBELT_1963 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Salama_2026 | irrelevant | 0 | 0 | The study investigates the in vitro release and neuroprotective efficacy of rutin (a flavonoid structurally related to but distinct from rutoside) in mice, and does not provide population pharmacokinetic parameters for rutoside. |
| popPK | Sawai_1987 | relevant | 5 | 4 | Study reports pharmacokinetics of rutoside metabolites in humans with some quantitative data (half-life, excretion), but not standard compartmental parameters for rutoside itself. |
| popPK | Seo_2022 | irrelevant | 1 | 0 | The study investigates pharmacokinetics of Cudrania tricuspidata leaf extracts in rats, focusing on quercetin and kaempferol metabolites, with rutin listed only as a standard, not rutoside as the subject drug. |
| popPK | Sharma_2020 | irrelevant | 2 | 0 | The study reports relative bioavailability ratios (AUC and Cmax) and pharmacodynamic outcomes for rutin (a glycoside of rutoside/quercetin) in rats, but does not report the absolute quantitative disposition parameters (CL, V, t1/2) for rutoside itself. |
| popPK | Shi_2022 | irrelevant | 3 | 2 | The study analyzes rutin (RU) as a component of safflower injection, not the drug rutoside, and the numeric PK parameters visible in the evidence correspond to HSYA, not RU. |
| popPK | Song_1992 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic inhibition study of 11 beta-hydroxysteroid dehydrogenase and does not report any pharmacokinetic parameters for rutoside. |
| popPK | Song_2022 | irrelevant | 0 | 0 | This is an analytical chemistry study on an electrochemical biosensor for rutin detection, not a pharmacokinetic study, and it reports no disposition parameters (CL, V, etc.) for rutoside or rutin. |
| popPK | Tang_2019 | irrelevant | 0 | 0 | The paper investigates the therapeutic effects and molecular mechanisms of a traditional Chinese herbal extract (You-Gui-Yin) in mice, and does not study the pharmacokinetics of rutoside. |
| popPK | Tao_2024 | irrelevant | 0 | 0 | The paper is a review of Lindera aggregata, a plant species, and does not focus on the drug rutoside or report any quantitative pharmacokinetic parameters. |
| PGx | Thakur_2025 | not_relevant | 0 | 0 | The paper is a network pharmacology and molecular docking study exploring mechanisms, and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Tian_2022 | irrelevant | 5 | 9 | The paper reports pharmacokinetic parameters for the drug "Rutin", which is a different compound from the subject drug "Rutoside" (a mixture of three rhamnosylquercetin isomers). |
| popPK | Wahnou_2024 | irrelevant | 0 | 0 | The paper is a computational study of Artemisia herba alba compounds (including rutin, not rutoside) for IBD-associated arthritis and does not report quantitative PK parameters for rutoside. |
| popPK | Wahnou_2025 | irrelevant | 0 | 0 | The study investigates the anti-inflammatory effects of *Artemisia herba alba* extract in a murine model and does not report pharmacokinetic parameters for rutoside (rutin is merely listed as a detected compound). |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on flavonoids from Chimonanthus nitens (rutin, nicotiflorin, etc.), not rutoside, which is a different compound (often a mixture of rhamnosides). |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of a traditional Chinese medicine formula for sepsis-associated encephalopathy using rutin as a tool compound, containing no pharmacokinetic data for rutoside. |
| popPK | Wu_2024 | irrelevant | 1 | 0 | The study focuses on the drug "Rutin" (a specific flavonoid), which is distinct from the target drug "Rutoside" (a mixture/rutin derivative), and while PK data for Rutin is reported, it does not apply to Rutoside. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sophoraflavanone G and kurarinone, with rutin (structurally related but distinct from rutoside) used only as an internal standard, not as the subject drug. |
| popPK | Yao_2019 | irrelevant | 0 | 0 | The paper is a review of Polyalthia species and does not contain original pharmacokinetic data or quantitative parameters for rutoside. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The study investigates the therapeutic effects of cerium-rutin nanoparticles on Alzheimer's disease mechanisms (ROS, Aβ) in animal models, containing no pharmacokinetic data for rutoside. |
| popPK | Zeng_2018 | irrelevant | 2 | 0 | The study focuses on rutin and chlorogenic acid, not rutoside, and no quantitative rutoside parameters are present. |
| popPK | Zhang_2017 | irrelevant | 2 | 0 | The study focuses on Mori Folium flavones (specifically rutin) in rats, not rutoside, and does not provide extractable numeric PK parameters for rutoside. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oseltamivir and its interaction with Radix Scutellariae; rutoside is not mentioned or investigated. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on a nanopolymer for lung cancer treatment and does not report pharmacokinetic parameters for rutoside. |
| popPK | Zhao_2021 | irrelevant | 1 | 0 | The study investigates Rutin, a different flavonoid (rutin is 3-O-rutinosylquercetin, while rutoside is 3-O-rutinosyldihydroquercetin), and no numeric PK values are provided in the text. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The study investigates the immunological mechanism of rutin (pyroptosis) in response to infection, not its pharmacokinetics or disposition parameters. |
| popPK | Zhou_2023 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of rutin and quercetin's inhibition of non-enzymatic glycosylation, containing no pharmacokinetic parameters for rutoside. |
| popPK | de_2021 | irrelevant | 0 | 0 | The study is an in silico computational evaluation of flavonoids in açaí fruit and does not involve rutoside as a subject drug or report experimental PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:05 UTC</sub>
