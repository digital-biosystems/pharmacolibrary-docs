<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01B&quot;,&quot;href&quot;:&quot;atc/N01B.md&quot;},{&quot;label&quot;:&quot;levobupivacaine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levobupivacaine_Araneda2025_reference&quot;,&quot;label&quot;:&quot;Araneda_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levobupivacaine/Levobupivacaine_Araneda2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levobupivacaine_Venkatachalam2022_reference&quot;,&quot;label&quot;:&quot;Venkatachalam_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levobupivacaine/Levobupivacaine_Venkatachalam2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levobupivacaine_Vincent2020_reference&quot;,&quot;label&quot;:&quot;Vincent_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levobupivacaine/Levobupivacaine_Vincent2020_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# levobupivacaine

- **generic name:** levobupivacaine
- **ATC codes:** `N01BB10`
- **DrugBank:** [DB01002](https://go.drugbank.com/drugs/DB01002) · **PubChem:** [CID 92253](https://pubchem.ncbi.nlm.nih.gov/compound/92253)
- **molar mass:** 288.4277 g/mol (C18H28N2O) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Levobupivacaine is a local anesthetic used to relieve pain. It is an approved amide-type local anesthetic, though some uses remain investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3272027](https://www.wikidata.org/wiki/Q3272027) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| levobupivacaine | parent | 288.428 | C18H28N2O | DrugBank | [92253](https://pubchem.ncbi.nlm.nih.gov/compound/92253) | Araneda_2025, Vincent_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:03 | 1:35 | 2/0/2 | 2/1/0 | 0/0/0 | 146,037/15,754 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.9). The first reading is what the record holds.">cross-check: partial</span> | [Araneda_2025_reference](drugs/drug_levobupivacaine/Levobupivacaine_Araneda2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Araneda A et al., Pharmacokinetic modelling and simulatio…, British journal of anaesthe… (2025) | [10.1016/j.bja.2025.05.047](https://doi.org/10.1016/j.bja.2025.05.047) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span> | [Venkatachalam_2022_reference](drugs/drug_levobupivacaine/Levobupivacaine_Venkatachalam2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Venkatachalam D et al., Pharmacokinetics and efficacy of a nove…, Frontiers in veterinary sci… (2022) | [10.3389/fvets.2022.1060951](https://doi.org/10.3389/fvets.2022.1060951) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Eljebari_2014_reference](drugs/drug_levobupivacaine/Levobupivacaine_Eljebari2014_reference.md) | — | 1-compartment (no model) | 2 | Eljebari H et al., Population pharmacokinetics of bupivaca…, Indian journal of pharmacol… (2014) | [10.4103/0253-7613.129318](https://doi.org/10.4103/0253-7613.129318) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Vincent_2020_reference](drugs/drug_levobupivacaine/Levobupivacaine_Vincent2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+1 cov.) | Vincent M et al., Population Pharmacokinetics of Levobupi…, Therapeutic drug monitoring (2020) | [10.1097/FTD.0000000000000702](https://doi.org/10.1097/FTD.0000000000000702) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lemoine_2016_discharge_time](drugs/drug_levobupivacaine/pd_Lemoine_2016_discharge_time.md) | time to hospital discharge ← bupivacaine · direct Emax (saturable) effect | — | Lemoine A et al., Modelling of the optimal bupivacaine do…, European journal of anaesth… (2016) | [10.1097/EJA.0000000000000528](https://doi.org/10.1097/EJA.0000000000000528) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lemoine_2016_motor_block_duration](drugs/drug_levobupivacaine/pd_Lemoine_2016_motor_block_duration.md) | time to recovery of motor function ← bupivacaine · direct Emax (saturable) effect | — | Lemoine A et al., Modelling of the optimal bupivacaine do…, European journal of anaesth… (2016) | [10.1097/EJA.0000000000000528](https://doi.org/10.1097/EJA.0000000000000528) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Storgaard_2024_WDT](drugs/drug_levobupivacaine/pd_Storgaard_2024_WDT.md) | Warmth detection threshold ← bupivacaine · direct linear effect | model (no simulator) | Storgaard IK et al., Population pharmacokinetic-pharmacodyna…, Basic & clinical pharmacolo… (2024) | [10.1111/bcpt.14004](https://doi.org/10.1111/bcpt.14004) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Schnider_1996_analgesia](drugs/drug_levobupivacaine/pd_Schnider_1996_analgesia.md) | central neural blockade ← bupivacaine · direct Emax (saturable) effect | — | Schnider TW et al., Population pharmacodynamic modeling and…, Anesthesiology (1996) | [10.1097/00000542-199609000-00009](https://doi.org/10.1097/00000542-199609000-00009) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=levobupivacaine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SCN10A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 119 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 2  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Araneda_2025.pdf` | Araneda A et al., Pharmacokinetic modelling and simulatio…, British journal of anaesthe… (2025) | popPK | 10 | [10.1016/j.bja.2025.05.047](https://doi.org/10.1016/j.bja.2025.05.047) | [40640046](https://pubmed.ncbi.nlm.nih.gov/40640046) | The study reports quantitative population PK parameters (V, CL, bioavailability, absorption half-life) for levobupivacaine derived from a compartmental model in human patients. |
| `Olofsen_2008.pdf` | Olofsen E et al., Population pharmacokinetic-pharmacodyna…, Anesthesiology (2008) | popPK | 10 | [10.1097/01.anes.0000334302.50559.c9](https://doi.org/10.1097/01.anes.0000334302.50559.c9) | [18813046](https://pubmed.ncbi.nlm.nih.gov/18813046) | Study develops a population PK/PD model for levobupivacaine, but specific numeric clearance/volume parameters are not listed in the provided abstract/evidence text, only effect half-lives. |
| `Frawley_2022.pdf` | Frawley G et al., Levobupivacaine plasma concentrations f…, Paediatric anaesthesia (2022) | popPK | 8 | [10.1111/pan.14556](https://doi.org/10.1111/pan.14556) | [36106368](https://pubmed.ncbi.nlm.nih.gov/36106368) | The paper describes a population PK model for levobupivacaine in infants, but the specific numeric parameter estimates (CL, V, Q) are not provided in the abstract, only predicted concentrations. |

<sub>queue written 2026-10-07T04:02:08.460780+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berven_2024 | irrelevant | 0 | 0 | The study is a retrospective real-world assessment of pain management outcomes (opioid use) and does not report pharmacokinetic parameters for levobupivacaine. |
| popPK | Davoud_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic model of mean arterial pressure response to phenylephrine and bupivacaine, containing no pharmacokinetic parameters (CL, V, ka, etc.) for levobupivacaine or bupivacaine. |
| popPK | Eljebari_2014 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for racemic bupivacaine, not levobupivacaine (the S-enantiomer), which is the target drug. |
| popPK | Frawley_2022 | relevant | 8 | 2 | The paper describes a population PK model for levobupivacaine in infants, but the specific numeric parameter estimates (CL, V, Q) are not provided in the abstract, only predicted concentrations. |
| popPK | Grindy_2023 | irrelevant | 1 | 0 | The study focuses on the delivery of bupivacaine (the racemate/parent), not levobupivacaine specifically, and relies on in-vitro data for PK estimation rather than reporting quantitative in-vivo disposition parameters for the target drug. |
| popPK | He_2026 | irrelevant | 0 | 0 | The study reports the median effective concentration (EC50) of liposomal bupivacaine for a nerve block, which is a pharmacodynamic/dose-finding parameter, not a pharmacokinetic disposition parameter (such as clearance, volume of distribution, or half-life). |
| popPK | Lemoine_2016 | irrelevant | 0 | 0 | The study models bupivacaine (not levobupivacaine) dose-response for clinical outcomes, not pharmacokinetic parameters. |
| popPK | Makdessi_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of bupivacaine's effect on calcium signaling in neuronal cells, not a pharmacokinetic study of levobupivacaine. |
| popPK | Mazoit_2006 | irrelevant | 1 | 0 | The paper is a review that qualitatively mentions low clearance of bupivacaine (not levobupivacaine) in children but provides no quantitative disposition parameters or specific values. |
| popPK | Olofsen_2008 | relevant | 10 | 2 | Study develops a population PK/PD model for levobupivacaine, but specific numeric clearance/volume parameters are not listed in the provided abstract/evidence text, only effect half-lives. |
| popPK | Perez-Castro_2009 | irrelevant | 0 | 0 | This is an in-vitro cytotoxicity study reporting cell viability and apoptosis markers, containing no pharmacokinetic disposition parameters (CL, V, t1/2) for levobupivacaine. |
| popPK | Punke_2003 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study investigating the mechanism of bupivacaine's interaction with TREK-1 channels, not a pharmacokinetic study reporting disposition parameters for levobupivacaine. |
| popPK | Schnider_1996 | irrelevant | 0 | 0 | The study models the pharmacodynamics of bupivacaine (analgesic effect), not the pharmacokinetics of levobupivacaine. |
| popPK | Storgaard_2024 | irrelevant | 2 | 8 | The study reports quantitative PK parameters for bupivacaine, not levobupivacaine. |
| popPK | Youn_2025 | irrelevant | 0 | 0 | The study reports clinical pain scores (NRS/AUC) and does not measure or report pharmacokinetic parameters for levobupivacaine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:02 UTC</sub>
