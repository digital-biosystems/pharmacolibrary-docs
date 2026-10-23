<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;oxprenolol&quot;}]"></div>

# oxprenolol

- **generic name:** oxprenolol
- **ATC codes:** `C07AA02`, `C07BA02`, `C07CA02`
- **DrugBank:** [DB01580](https://go.drugbank.com/drugs/DB01580) · **PubChem:** [CID 4631](https://pubchem.ncbi.nlm.nih.gov/compound/4631)
- **molar mass:** 265.348 g/mol (C15H23NO3) — DrugBank
- **groups:** approved, withdrawn

## About

Oxprenolol is a non-selective beta blocker that was used to treat high blood pressure and anxiety. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425963](https://www.wikidata.org/wiki/Q425963) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Jonkers_1989_plasma_potassium_concentrations](drugs/drug_oxprenolol/pd_Jonkers_1989_plasma_potassium_concentrations.md) | plasma potassium concentrations ← oxprenolol · inhibition effect | — | Jonkers R et al., A nonsteady-state agonist antagonist in…, The Journal of pharmacology… (1989) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=oxprenolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:32 | 0:45 | 0/0/0 | 1/0/0 | 0/0/0 | 28,205/1,022 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 60 matched, 42 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jennings_1981.pdf` | Jennings G et al., Influence of intrinsic sympathomimetic…, British journal of clinical… (1981) | pd | 5 | [10.1111/j.1365-2125.1981.tb01226.x](https://doi.org/10.1111/j.1365-2125.1981.tb01226.x) | [6117303](https://www.ncbi.nlm.nih.gov/pubmed/6117303) | metadata signals extractable PD data (sigmoid) |
| `Koopmans_1988.pdf` | Koopmans R et al., Pharmacokinetic-pharmacodynamic modelli…, European journal of clinica… (1988) | pd | 5 | [10.1007/BF00542442](https://doi.org/10.1007/BF00542442) | [3402525](https://www.ncbi.nlm.nih.gov/pubmed/3402525) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Koopmans_1993.pdf` | Koopmans R et al., The effect of oxprenolol dosage time on…, European journal of clinica… (1993) | pd | 5 | [10.1007/BF00315476](https://doi.org/10.1007/BF00315476) | [8453962](https://www.ncbi.nlm.nih.gov/pubmed/8453962) | metadata signals extractable PD data (EC50) |
| `Lemmer_1997.pdf` | Lemmer B, Chronopharmacological aspects of PK/PD…, International journal of cl… (1997) | pd | 5 |  | [9352396](https://www.ncbi.nlm.nih.gov/pubmed/9352396) | metadata signals extractable PD data (PK/PD) |
| `Saunders_1985.pdf` | Saunders L et al., The pharmacokinetics and dynamics of ox…, The Journal of pharmacy and… (1985) | pd | 5 | [10.1111/j.2042-7158.1985.tb04971.x](https://doi.org/10.1111/j.2042-7158.1985.tb04971.x) | [2867161](https://www.ncbi.nlm.nih.gov/pubmed/2867161) | metadata signals extractable PD data (Emax) |
| `McInnes_1988.pdf` | McInnes GT et al., Concentration-effect relationships for…, British journal of clinical… (1988) | pd | 4 | [10.1111/j.1365-2125.1988.tb03343.x](https://doi.org/10.1111/j.1365-2125.1988.tb03343.x) | [3408634](https://www.ncbi.nlm.nih.gov/pubmed/3408634) | metadata signals extractable PD data (Concentration-effect) |
| `Maideen_2021.pdf` | Maideen NMP et al., A Review on Pharmacokinetic and Pharmac…, Current drug metabolism (2021) | pgx | 7 | [10.2174/1389200222666210614112529](https://doi.org/10.2174/1389200222666210614112529) | [34182907](https://www.ncbi.nlm.nih.gov/pubmed/34182907) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07 00:31 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barrett_1970 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study comparing chronotropic activity and does not report pharmacokinetic parameters for oxprenolol. |
| popPK | Bennett_1985 | irrelevant | 2 | 0 | The paper describes a pharmacokinetic comparison but the provided evidence contains only qualitative descriptions of plasma concentration profiles (e.g., "maximal at 3 h") without any quantitative disposition parameters (CL, V, ka, t1/2) or numeric values. |
| PD | Bennett_1985 | not_relevant | 2 | 1 | The paper reports qualitative changes in heart rate and plasma concentrations but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| popPK | Brunner_1975 | relevant | 8 | 2 | The study reports a half-life of 80 minutes for oxprenolol, but lacks other quantitative disposition parameters like clearance or volume of distribution. |
| PD | Brunner_1975 | not_relevant | 5 | 2 | The paper describes a dose-response relationship and compares effects to plasma concentrations but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative effect-concentration curve in the provided text. |
| popPK | Capponi_1977 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of renin release from rat kidney slices, not a pharmacokinetic study, and contains no disposition parameters for oxprenolol. |
| popPK | Carruthers_1981 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic partial agonist activity of pindolol, with oxprenolol mentioned only as a comparator for qualitative dose-response curve shape, and no pharmacokinetic parameters are reported. |
| PD | Carruthers_1981 | not_relevant | 1 | 0 | The paper focuses on pindolol and only qualitatively mentions oxprenolol's partial agonist activity without providing any numeric PD parameters or dose-response data for oxprenolol. |
| popPK | Chou_2023 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of cutaneous analgesia in rats and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Dayer_1986 | irrelevant | 2 | 0 | Oxprenolol is used only as a comparator for relative potency and duration of action, with no quantitative pharmacokinetic parameters (CL, V, t1/2) reported for it in the evidence. |
| PD | Dayer_1986 | not_relevant | 2 | 1 | The text provides only qualitative comparisons of relative potency (dose equivalence) and duration of action, without reporting specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves for oxprenolol. |
| PGx | Dayer_1986 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for bopindolol and metoprolol, but oxprenolol is only used as a comparator in a study involving only extensive metabolizers, with no genetic variation analysis for oxprenolol. |
| popPK | Esler_2022 | irrelevant | 0 | 0 | The paper is a review/position statement on hypertension guidelines and does not report original quantitative pharmacokinetic parameters for oxprenolol. |
| PD | Esler_2022 | not_relevant | 1 | 0 | The paper is a qualitative position statement arguing against guideline downgrading of beta-blockers and does not report any numeric pharmacodynamic parameters or exposure-response data for oxprenolol. |
| popPK | Foëx_1981 | irrelevant | 0 | 0 | The study is a pharmacodynamic dose-response investigation in dogs and does not report any pharmacokinetic parameters such as clearance, volume, or half-life for oxprenolol. |
| popPK | Först_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of membrane interactions using fluorescence and simulations, reporting no pharmacokinetic parameters for oxprenolol. |
| PD | Först_2014 | not_relevant | 0 | 0 | The paper investigates biophysical interactions with lipid membranes using fluorescence and simulations, not pharmacodynamic exposure-response relationships or dose-effect curves for clinical endpoints. |
| popPK | Hellwich_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of membrane binding and partition coefficients, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Hellwich_1995 | not_relevant | 0 | 0 | The paper describes in vitro membrane binding/partitioning of oxprenolol to liposomes, not a pharmacodynamic (exposure-response or dose-response) effect on a biological system. |
| popPK | Jennings_1981 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| PD | Jennings_1981 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Jeong_2012 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of carvedilol on Kv1.5 channels, and oxprenolol is only mentioned as a comparator with no pharmacokinetic parameters reported. |
| PD | Jeong_2012 | not_relevant | 0 | 0 | The paper reports that oxprenolol had little or no effect on Kv1.5 currents and does not provide numeric PD parameters for oxprenolol. |
| popPK | Jonkers_1987 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of terbutaline (the subject drug) and its interaction with oxprenolol, which is used as a co-administered antagonist rather than the primary subject of PK parameter estimation. |
| popPK | Jonkers_1989 | irrelevant | 2 | 0 | The study focuses on beta-2 selectivity (IC50) and the effect of oxprenolol on terbutaline's pharmacokinetics, rather than reporting quantitative disposition parameters (CL, V, t1/2) for oxprenolol itself. |
| popPK | Kawashima_1981 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding oxprenolol pharmacokinetics. |
| popPK | Kendall_1983 | irrelevant | 2 | 0 | The text is a qualitative review describing general pharmacokinetic properties (e.g., lipophilicity, protein binding) without reporting specific quantitative disposition parameters (CL, V, t1/2) for oxprenolol. |
| PD | Kendall_1983 | not_relevant | 2 | 0 | The text is a qualitative review stating that beta-blocking effects correlate with plasma concentrations but explicitly notes that direct correlation with therapeutic actions is not possible, providing no numeric PD parameters or curves. |
| popPK | Kendall_1984 | irrelevant | 2 | 0 | The study reports qualitative changes in AUC and Cmax for oxprenolol due to drug interaction but does not provide specific quantitative PK parameter values (CL, V, ka, etc.) in the evidence. |
| PD | Kendall_1984 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic changes (AUC, Cmax) induced by oral contraceptives and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Kerry_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of platelet aggregation and does not report any pharmacokinetic parameters for oxprenolol. |
| popPK | Koopmans_1988 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| popPK | Koopmans_1993 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| popPK | Lemmer_1982 | irrelevant | 1 | 0 | The paper is a general review of beta-blockers that mentions oxprenolol only as a class representative with a general half-life range, lacking specific quantitative PK parameters or compartmental models for oxprenolol. |
| PD | Lemmer_1982 | not_relevant | 1 | 0 | The text is a general review discussing the pharmacological basis of beta-blockers and mentions qualitative PK/PD concepts (zero-order vs first-order kinetics) but provides no specific numeric PD parameters or concentration-effect data for oxprenolol. |
| popPK | Lemmer_1997 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| PD | Lemmer_1997 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data regarding oxprenolol. |
| popPK | Leone_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of oxprenolol's protective effect on myocardial function in dogs, reporting no pharmacokinetic parameters. |
| PD | Leone_1987 | not_relevant | 3 | 2 | The paper reports a qualitative protective effect of oxprenolol on regional myocardial function under specific conditions (halothane exposure) but does not provide a concentration-effect or dose-response curve for oxprenolol itself, nor does it derive numeric PD parameters (e.g., EC50, Emax) for oxprenolol. |
| popPK | Lochan_1981 | irrelevant | 2 | 0 | The study reports pharmacodynamic onset times (time to maximum attenuation) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for oxprenolol. |
| PD | Lochan_1981 | not_relevant | 3 | 2 | The paper reports qualitative speed of onset and relative ranking of drugs but does not provide numeric concentration-effect curves or specific PD parameters (Emax, EC50) for oxprenolol. |
| popPK | Maideen_2021 | irrelevant | 0 | 0 | The paper is a review of drug interactions without original quantitative pharmacokinetic parameter values for oxprenolol. |
| PD | Maideen_2021 | not_relevant | 1 | 0 | The paper is a qualitative review of drug interactions and does not report specific numeric PD parameters or concentration-effect curves for oxprenolol. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (CYP inhibition/induction) and does not report pharmacogenomic effects of gene variants on oxprenolol PK/PD. |
| popPK | McInnes_1988 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| popPK | Moretti-Rojas_1983 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay where oxprenolol is used only as a competitive antagonist probe, not a pharmacokinetic study of oxprenolol disposition. |
| PD | Moretti-Rojas_1983 | not_relevant | 1 | 2 | The paper reports receptor binding affinity (IC50) for oxprenolol in a radioligand binding assay, which is a pharmacological binding parameter, not a pharmacodynamic exposure-response or dose-response relationship for a physiological effect. |
| popPK | OGrady_1978 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of oxprenolol on vasoconstriction, not its pharmacokinetic disposition parameters. |
| popPK | Radice_1979 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison where oxprenolol serves only as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Radice_1979 | not_relevant | 2 | 1 | The paper reports qualitative comparisons and relative potency ratios (5.0-13.5x) but does not provide numeric PD parameters (Emax, EC50) or concentration-effect curves for oxprenolol. |
| popPK | Sakuta_1992 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel blockade in Xenopus oocytes and does not report pharmacokinetic parameters for oxprenolol. |
| popPK | Saunders_1985 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| popPK | Silke_1981 | irrelevant | 0 | 0 | The study reports haemodynamic dose-response effects (blood pressure, heart rate) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Sári_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of nitroglycerin tolerance in rabbit sphincter of Oddi, where oxprenolol is used only as a non-selective beta-blocker in a NANC cocktail, not as the subject of PK analysis. |
| PD | Sári_1998 | not_relevant | 0 | 0 | The paper studies nitroglycerin tolerance in rabbit sphincter of Oddi; oxprenolol is used only as a fixed-concentration blocker in a pharmacological cocktail, with no dose-response or exposure-response analysis for oxprenolol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxprenolol%5D&body=Drug%3A%20oxprenolol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oxprenolol/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
