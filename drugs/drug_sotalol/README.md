<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;sotalol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sotalol_Yellepeddi2025_reference&quot;,&quot;label&quot;:&quot;Yellepeddi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Dubois_2016_Displacement&quot;,&quot;label&quot;:&quot;Dubois_2016 \u00b7 Displacement&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_sotalol/pd_Dubois_2016_Displacement.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# sotalol

- **generic name:** sotalol
- **ATC codes:** `C07AA07`, `C07BA07`, `C07FX02`
- **DrugBank:** [DB00489](https://go.drugbank.com/drugs/DB00489) · **PubChem:** [CID 5253](https://pubchem.ncbi.nlm.nih.gov/compound/5253)
- **molar mass:** 272.364 g/mol (C12H20N2O3S) — DrugBank
- **groups:** approved, investigational

## About

Sotalol is a non-selective beta blocker with additional antiarrhythmic activity, used to treat heart rhythm problems such as atrial fibrillation, ventricular fibrillation, and supraventricular tachycardia. It is an approved medicine that remains in use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413591](https://www.wikidata.org/wiki/Q413591) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sotalol | parent | 272.364 | C12H20N2O3S | DrugBank | [5253](https://pubchem.ncbi.nlm.nih.gov/compound/5253) | Hanyok_1993_2, Salazar_1997, Yellepeddi_2025 |
| d-sotalol | metabolite | 272.363 | C12H20N2O3S | PubChem | [119259](https://pubchem.ncbi.nlm.nih.gov/compound/119259) | Salazar_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:46 | 2:37 | 1/3/2 | 3/0/0 | 0/0/0 | 151,705/10,402 | einfracz / qwen3.8-27b | 15 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.952), gpt-oss:120b (not confirmed, agreement 0.952). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Yellepeddi_2025_reference](drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 (+1 cov.) | Yellepeddi VK et al., Population Pharmacokinetics and Pharmac…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13302](https://doi.org/10.1002/psp4.13302) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.889), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Hanyok_1993_2_reference](drugs/drug_sotalol/Sotalol_Hanyok1993v2_reference.md) | — | 1-compartment (no model) | 1 | Hanyok JJ, Clinical pharmacokinetics of sotalol, The American journal of car… (1993) | [10.1016/0002-9149(93)90021-4](https://doi.org/10.1016/0002-9149(93)90021-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833), gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Salazar_1997_reference](drugs/drug_sotalol/Sotalol_Salazar1997_reference.md) | — | 1-compartment (no model) | 1 | Salazar DE et al., A pharmacokinetic-pharmacodynamic model…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb05627.x](https://doi.org/10.1002/j.1552-4604.1997.tb05627.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4), gpt-oss:120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gotta_2015_dofetilide_estimate_rse](drugs/drug_sotalol/Sotalol_Gotta2015_dofetilide_estimate_rse.md) | — | 1-compartment (no model) | 0 | Gotta V et al., Inter-study variability of preclinical…, British journal of pharmaco… (2015) | [10.1111/bph.13218](https://doi.org/10.1111/bph.13218) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4), gpt-oss:120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gotta_2015_moxifloxacin_estimate_rse](drugs/drug_sotalol/Sotalol_Gotta2015_moxifloxacin_estimate_rse.md) | — | 1-compartment (no model) | 0 | Gotta V et al., Inter-study variability of preclinical…, British journal of pharmaco… (2015) | [10.1111/bph.13218](https://doi.org/10.1111/bph.13218) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4), gpt-oss:120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gotta_2015_sotalol_estimate_rse](drugs/drug_sotalol/Sotalol_Gotta2015_sotalol_estimate_rse.md) | — | 1-compartment (no model) | 0 | Gotta V et al., Inter-study variability of preclinical…, British journal of pharmaco… (2015) | [10.1111/bph.13218](https://doi.org/10.1111/bph.13218) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Dubois_2016_Inhibition](drugs/drug_sotalol/pd_Dubois_2016_Inhibition.md) | hERG channel inhibition ← sotalol · direct sigmoid Emax (Hill) effect | — | Dubois VF et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2016) | [10.1111/bph.13558](https://doi.org/10.1111/bph.13558) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span> | [Gotta_2015_QTc](drugs/drug_sotalol/pd_Gotta_2015_QTc.md) | ΔQTc ← sotalol · delayed effect through an effect compartment | — | Gotta V et al., Inter-study variability of preclinical…, British journal of pharmaco… (2015) | [10.1111/bph.13218](https://doi.org/10.1111/bph.13218) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Salazar_1997_Q_Tc](drugs/drug_sotalol/pd_Salazar_1997_Q_Tc.md) | Q-Tc interval ← d-sotalol · direct sigmoid Emax (Hill) effect | — | Salazar DE et al., A pharmacokinetic-pharmacodynamic model…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb05627.x](https://doi.org/10.1002/j.1552-4604.1997.tb05627.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Dubois_2016_Displacement](drugs/drug_sotalol/pd_Dubois_2016_Displacement.md) | [3H]-dofetilide displacement ← sotalol · direct Emax (saturable) effect | ▶ model + simulator | Dubois VF et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2016) | [10.1111/bph.13558](https://doi.org/10.1111/bph.13558) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sotalol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 20 returned
- **screened:** 7  ·  **relevant:** 6
- **records:** 6  ·  extracted 1  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Salazar_1997.pdf` | Salazar DE et al., A pharmacokinetic-pharmacodynamic model…, Journal of clinical pharmac… (1997) | popPK | 10 | [10.1002/j.1552-4604.1997.tb05627.x](https://doi.org/10.1002/j.1552-4604.1997.tb05627.x) | [9549633](https://pubmed.ncbi.nlm.nih.gov/9549633) | The study reports a compartmental PK model for sotalol, but specific numeric values for Clearance and central Volume are not explicitly stated in the provided text (only Vss and PD parameters are given). |
| `Salmon_2024.pdf` | Salmon SJ et al., Single- and multiple-dose pharmacokinet…, Journal of veterinary cardi… (2024) | popPK | 10 | [10.1016/j.jvc.2023.11.015](https://doi.org/10.1016/j.jvc.2023.11.015) | [38118234](https://pubmed.ncbi.nlm.nih.gov/38118234) | The study provides explicit non-compartmental PK parameters (CL, Vd, t1/2, bioavailability) for sotalol in cats. |
| `Saul_2001_2.pdf` | Saul JP et al., Single-dose pharmacokinetics of sotalol…, Journal of clinical pharmac… (2001) | popPK | 10 | [10.1177/00912700122009818](https://doi.org/10.1177/00912700122009818) | [11144992](https://pubmed.ncbi.nlm.nih.gov/11144992) | The paper reports quantitative pediatric PK parameters (half-life, CL/f, Vd) for sotalol, with specific numeric values for half-life provided in the abstract and general descriptions of clearance and volume relationships. |
| `Shi_2001.pdf` | Shi J et al., Population pharmacokinetics and pharmac…, Journal of pharmacokinetics… (2001) | popPK | 10 | [10.1023/a:1014412521191](https://doi.org/10.1023/a:1014412521191) | [11999292](https://pubmed.ncbi.nlm.nih.gov/11999292) | The study reports a population PK model for sotalol in pediatric patients, but the specific numeric estimates for clearance and volume parameters are not listed in the provided text, likely residing in tables or figures not included in the evidence. |
| `Uematsu_1994.pdf` | Uematsu T et al., Comparative pharmacokinetic and pharmac…, The Journal of pharmacy and… (1994) | popPK | 10 | [10.1111/j.2042-7158.1994.tb03865.x](https://doi.org/10.1111/j.2042-7158.1994.tb03865.x) | [7996391](https://pubmed.ncbi.nlm.nih.gov/7996391) | The abstract reports specific quantitative parameters for sotalol, including half-life, renal clearance trends, and urinary recovery rates, though full compartmental model parameters (CL, Vd, ka) are not explicitly listed as numbers. |
| `Hanyok_1993_2.pdf` | Hanyok JJ, Clinical pharmacokinetics of sotalol, The American journal of car… (1993) | popPK | 9 | [10.1016/0002-9149(93)90021-4](https://doi.org/10.1016/0002-9149(93)90021-4) | [8346722](https://pubmed.ncbi.nlm.nih.gov/8346722) | The abstract explicitly lists quantitative PK parameters for sotalol, including volume of distribution (1.2-2.4 L/kg), clearance (150 mL/min), and half-life (10-20 hours). |
| `Ritchie_1998.pdf` | Ritchie RH et al., Myocardial effect compartment modeling…, Journal of pharmaceutical s… (1998) | popPK | 9 | [10.1021/js9702776](https://doi.org/10.1021/js9702776) | [9519150](https://pubmed.ncbi.nlm.nih.gov/9519150) | The study analyzes myocardial compartmental pharmacokinetics for sotalol but does not report specific numeric parameter values in the provided evidence. |
| `Barbey_1999.pdf` | Barbey JT et al., Pharmacokinetic, pharmacodynamic, and s…, Clinical pharmacology and t… (1999) | popPK | 8 | [10.1016/S0009-9236(99)70058-5](https://doi.org/10.1016/S0009-9236(99)70058-5) | [10430114](https://pubmed.ncbi.nlm.nih.gov/10430114) | The study reports sotalol plasma concentrations and evaluates dose titration in humans, but no specific numeric PK parameters (CL, Vd, t1/2, etc.) are present in the provided text. |
| `Schnelle_1979.pdf` | Schnelle K et al., Studies on the pharmacokinetics and pha…, Journal of clinical pharmac… (1979) | popPK | 8 | [10.1002/j.1552-4604.1979.tb02517.x](https://doi.org/10.1002/j.1552-4604.1979.tb02517.x) | [489770](https://pubmed.ncbi.nlm.nih.gov/489770) | The study describes a two-compartment PK model for sotalol in humans and reports a half-life range (6-8h), but specific numeric values for clearance (CL) and volume (V) are not explicitly listed in the provided evidence text. |

<sub>queue written 2026-10-15T03:44:36.903237+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barbey_1999 | relevant | 8 | 0 | The study reports sotalol plasma concentrations and evaluates dose titration in humans, but no specific numeric PK parameters (CL, Vd, t1/2, etc.) are present in the provided text. |
| popPK | Dubois_2016 | irrelevant | 0 | 0 | Sotalol is used only as a reference compound for in vitro-in vivo correlation of hERG binding and QT prolongation; no population PK parameters (CL, V, ka) for sotalol are reported. |
| popPK | Ritchie_1998 | relevant | 9 | 0 | The study analyzes myocardial compartmental pharmacokinetics for sotalol but does not report specific numeric parameter values in the provided evidence. |
| popPK | Salazar_1997 | relevant | 10 | 2 | The study reports a compartmental PK model for sotalol, but specific numeric values for Clearance and central Volume are not explicitly stated in the provided text (only Vss and PD parameters are given). |
| popPK | Schnelle_1979 | relevant | 8 | 2 | The study describes a two-compartment PK model for sotalol in humans and reports a half-life range (6-8h), but specific numeric values for clearance (CL) and volume (V) are not explicitly listed in the provided evidence text. |
| popPK | Shi_2001 | relevant | 10 | 2 | The study reports a population PK model for sotalol in pediatric patients, but the specific numeric estimates for clearance and volume parameters are not listed in the provided text, likely residing in tables or figures not included in the evidence. |
| popPK | West_1996 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects (ATP-sensitive potassium channel blockade) of sotalol on in vitro rabbit myocytes, not its pharmacokinetic disposition parameters. |
| popPK | Wettey_2006 | irrelevant | 0 | 0 | Sotalol is used only as a beta-antagonist comparator in an in-vitro mechanistic study of salbutamol, with no pharmacokinetic parameters reported. |
| PD | Wettey_2006 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, EC50) for salbutamol, not sotalol; sotalol is only mentioned as a qualitative antagonist used to confirm receptor mediation. |
| popPK | Wilson_1984 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of beta-adrenoceptor agonists and antagonists in rats, with no pharmacokinetic data reported for sotalol. |
| PD | Wilson_1984 | not_relevant | 1 | 0 | The paper reports pA2 values (antagonist potency) for sotalol, which is a pharmacological binding/affinity parameter, not a pharmacodynamic exposure-response or dose-response relationship (e.g., Emax, EC50 for effect, or concentration-effect curve) for the drug itself. |
| popPK | Zanetti_1993 | irrelevant | 2 | 1 | The paper is a general review that mentions a two-compartment model and a mean half-life but does not report specific quantitative values for clearance (CL), volume of distribution (V), or intercompartmental clearance (Q). |
| popPK | de_2000 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on bovine tracheal smooth muscle focusing on beta-adrenergic receptor activity, not a pharmacokinetic study for sotalol. |
| PD | de_2000 | not_relevant | 0 | 0 | The paper investigates beta-2 adrenergic receptor constitutive activity and inverse agonism in bovine tracheal smooth muscle; sotalol is only mentioned in a rank order of efficacy for inverse agonism without any exposure-response or dose-response PD parameters for sotalol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:44 UTC</sub>
