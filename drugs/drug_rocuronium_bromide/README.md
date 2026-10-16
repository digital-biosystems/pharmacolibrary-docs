<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;rocuronium bromide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;RocuroniumBromide_Ji2023_reference&quot;,&quot;label&quot;:&quot;Ji_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rocuronium_bromide/RocuroniumBromide_Ji2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;RocuroniumBromide_Li2025_reference&quot;,&quot;label&quot;:&quot;Li_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rocuronium_bromide/RocuroniumBromide_Li2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# rocuronium bromide

- **generic name:** rocuronium bromide
- **ATC codes:** `M03AC09`
- **DrugBank:** [DB00728](https://go.drugbank.com/drugs/DB00728) · **PubChem:** [CID 441290](https://pubchem.ncbi.nlm.nih.gov/compound/441290)
- **molar mass:** 529.7742 g/mol (C32H53N2O4) — DrugBank
- **groups:** approved, investigational

## About

Rocuronium bromide is a non-depolarising neuromuscular blocking agent (muscle relaxant) used to relax muscles, for example during surgery and procedures requiring intubation. It is an approved medicine and is widely used in anaesthesia, mainly in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q185331](https://www.wikidata.org/wiki/Q185331) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rocuronium_bromide (rocuronium) | metabolite | 529.774 | C32H53N2O4 | DrugBank | [441290](https://pubchem.ncbi.nlm.nih.gov/compound/441290) | Dragne_2002, Khalil_1994, Li_2025, Magorian_1995 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:53 | 2:23 | 1/2/3 | 7/0/0 | 0/0/0 | 235,663/27,489 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Ji_2023_reference](drugs/drug_rocuronium_bromide/RocuroniumBromide_Ji2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Ji SH et al., Reversal of rocuronium-induced intense…, Clinical and translational… (2023) | [10.1111/cts.13429](https://doi.org/10.1111/cts.13429) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Khalil_1994_reference](drugs/drug_rocuronium_bromide/RocuroniumBromide_Khalil1994_reference.md) | — | 1-compartment (no model) | 4 | Khalil M et al., Pharmacokinetics and pharmacodynamics o…, Anesthesiology (1994) | [10.1097/00000542-199406000-00011](https://doi.org/10.1097/00000542-199406000-00011) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Li_2025_reference](drugs/drug_rocuronium_bromide/RocuroniumBromide_Li2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Li X et al., Rapid quantification and PK-PD modeling…, Frontiers in veterinary sci… (2025) | [10.3389/fvets.2025.1543086](https://doi.org/10.3389/fvets.2025.1543086) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Magorian_1995_reference](drugs/drug_rocuronium_bromide/RocuroniumBromide_Magorian1995_reference.md) | — | 1-compartment (no model) | 4 | Magorian T et al., The pharmacokinetics and neuromuscular…, Anesthesia and analgesia (1995) | [10.1097/00000539-199504000-00018](https://doi.org/10.1097/00000539-199504000-00018) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.722). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Dragne_2002_isoflurane](drugs/drug_rocuronium_bromide/RocuroniumBromide_Dragne2002_isoflurane.md) | — | 1-compartment (no model) | 12 | Dragne A et al., Rocuronium pharmacokinetic-pharmacodyna…, Canadian journal of anaesth… (2002) | [10.1007/BF03017322](https://doi.org/10.1007/BF03017322) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.722). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Dragne_2002_propofol](drugs/drug_rocuronium_bromide/RocuroniumBromide_Dragne2002_propofol.md) | — | 1-compartment (no model) | 12 | Dragne A et al., Rocuronium pharmacokinetic-pharmacodyna…, Canadian journal of anaesth… (2002) | [10.1007/BF03017322](https://doi.org/10.1007/BF03017322) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Dragne_2002_Neuromuscular_block](drugs/drug_rocuronium_bromide/pd_Dragne_2002_Neuromuscular_block.md) | Neuromuscular block ← rocuronium · direct sigmoid Emax (Hill) effect | — | Dragne A et al., Rocuronium pharmacokinetic-pharmacodyna…, Canadian journal of anaesth… (2002) | [10.1007/BF03017322](https://doi.org/10.1007/BF03017322) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Grześkowiak_2023_TOF](drugs/drug_rocuronium_bromide/pd_Grze_kowiak_2023_TOF.md) | TOF ratio ← rocuronium · direct sigmoid Emax (Hill) effect | — | Grześkowiak M et al., Population Pharmacokinetic-Pharmacodyna…, European journal of drug me… (2023) | [10.1007/s13318-022-00809-1](https://doi.org/10.1007/s13318-022-00809-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kleijn_2011_NMB](drugs/drug_rocuronium_bromide/pd_Kleijn_2011_NMB.md) | neuromuscular blockade ← rocuronium · model not identified | — | Kleijn HJ et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.04000.x](https://doi.org/10.1111/j.1365-2125.2011.04000.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Li_2025_TOFR](drugs/drug_rocuronium_bromide/pd_Li_2025_TOFR.md) | Train of four (TOF) ratio ← Rocur · direct sigmoid Emax (Hill) effect | — | Li X et al., Rapid quantification and PK-PD modeling…, Frontiers in veterinary sci… (2025) | [10.3389/fvets.2025.1543086](https://doi.org/10.3389/fvets.2025.1543086) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vega_2016_TOF](drugs/drug_rocuronium_bromide/pd_Vega_2016_TOF.md) | first twitch of the TOF response ← rocuronium · direct sigmoid Emax (Hill) effect | — | Vega EA et al., Rocuronium pharmacokinetics and pharmac…, Acta anaesthesiologica Scan… (2016) | [10.1111/aas.12703](https://doi.org/10.1111/aas.12703) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vega_2016_TOF_2](drugs/drug_rocuronium_bromide/pd_Vega_2016_TOF_2.md) | first twitch of the TOF response ← rocuronium · direct sigmoid Emax (Hill) effect | — | Vega EA et al., Rocuronium pharmacokinetics and pharmac…, Acta anaesthesiologica Scan… (2016) | [10.1111/aas.12703](https://doi.org/10.1111/aas.12703) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Velázquez-Armenta_2002_TOF](drugs/drug_rocuronium_bromide/pd_Vel_zquez_Armenta_2002_TOF.md) | the first twitch of the TOF ← rocuronium · delayed effect through an effect compartment | — | Velázquez-Armenta EY et al., Population pharmacodynamic modeling wit…, Journal of clinical pharmac… (2002) | [10.1177/0091270002042001004](https://doi.org/10.1177/0091270002042001004) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wierda_1997_EMG](drugs/drug_rocuronium_bromide/pd_Wierda_1997_EMG.md) | neuromuscular block ← rocuronium · delayed effect through an effect compartment | — | Wierda JM et al., Pharmacokinetics and pharmacokinetic-dy…, British journal of anaesthe… (1997) | [10.1093/bja/78.6.690](https://doi.org/10.1093/bja/78.6.690) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rocuronium_bromide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `SLCO1A2` substrate | DrugBank actor |
| absorption | small intestine | `SLCO1A2` substrate | DrugBank actor |
| metabolism | liver | `SLC22A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM2 (target), CHRNA2 (target), HTR3A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 101 matched, 20 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 6  ·  extracted 1  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Khalil_1994.pdf` | Khalil M et al., Pharmacokinetics and pharmacodynamics o…, Anesthesiology (1994) | popPK | 10 | [10.1097/00000542-199406000-00011](https://doi.org/10.1097/00000542-199406000-00011) | [8010470](https://pubmed.ncbi.nlm.nih.gov/8010470) | The study reports specific quantitative PK parameters for rocuronium, including central volume of distribution (104 and 78 ml.kg-1) and elimination half-life (87.5 and 96.0 min), although clearance and intercompartmental values are not explicitly listed in the text. |
| `Magorian_1995.pdf` | Magorian T et al., The pharmacokinetics and neuromuscular…, Anesthesia and analgesia (1995) | popPK | 10 | [10.1097/00000539-199504000-00018](https://doi.org/10.1097/00000539-199504000-00018) | [7893030](https://pubmed.ncbi.nlm.nih.gov/7893030) | The study reports specific quantitative pharmacokinetic parameters (CL, Vc, Vss, t1/2) for rocuronium in humans. |
| `Sparr_1997.pdf` | Sparr HJ et al., Pharmacodynamics and pharmacokinetics o…, British journal of anaesthe… (1997) | popPK | 10 | [10.1093/bja/78.3.267](https://doi.org/10.1093/bja/78.3.267) | [9135303](https://pubmed.ncbi.nlm.nih.gov/9135303) | The text explicitly provides numeric values for clearance, steady-state distribution volume, mean residence time, and elimination half-life in intensive care patients. |
| `Varrique_2016.pdf` | Varrique RM et al., Pharmacokinetics and pharmacodynamics o…, The Journal of pharmacy and… (2016) | popPK | 10 | [10.1111/jphp.12617](https://doi.org/10.1111/jphp.12617) | [27545305](https://pubmed.ncbi.nlm.nih.gov/27545305) | The paper reports quantitative PK parameters (CL, AUC, Vd) for rocuronium in humans with specific numeric values provided in the text. |
| `Wierda_1997.pdf` | Wierda JM et al., Pharmacokinetics and pharmacokinetic-dy…, British journal of anaesthe… (1997) | popPK | 10 | [10.1093/bja/78.6.690](https://doi.org/10.1093/bja/78.6.690) | [9215021](https://pubmed.ncbi.nlm.nih.gov/9215021) | The study reports specific quantitative pharmacokinetic parameters (clearance, volume of distribution, mean residence time) for rocuronium in infants and children directly in the text. |
| `Kleijn_2011.pdf` | Kleijn HJ et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2011) | popPK | 9 | [10.1111/j.1365-2125.2011.04000.x](https://doi.org/10.1111/j.1365-2125.2011.04000.x) | [21535448](https://pubmed.ncbi.nlm.nih.gov/21535448) | The paper is a population PK/PD study of rocuronium, but the specific numeric PK parameter values (CL, V, etc.) are not listed in the provided evidence, which focuses on reversal times and covariate effects. |
| `Vega_2016.pdf` | Vega EA et al., Rocuronium pharmacokinetics and pharmac…, Acta anaesthesiologica Scan… (2016) | popPK | 8 | [10.1111/aas.12703](https://doi.org/10.1111/aas.12703) | [26899676](https://pubmed.ncbi.nlm.nih.gov/26899676) | The study reports quantitative PK/PD parameters for rocuronium, specifically effect-site equilibration half-time (teq) and plasma concentration metrics, derived from a NONMEM model in human patients. |
| `Ploeger_2009.pdf` | Ploeger BA et al., Pharmacokinetic-pharmacodynamic model f…, Anesthesiology (2009) | popPK | 7 | [10.1097/ALN.0b013e318190bc32](https://doi.org/10.1097/ALN.0b013e318190bc32) | [19104176](https://pubmed.ncbi.nlm.nih.gov/19104176) | The paper describes a PK-PD model for rocuronium, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-07T02:51:17.392429+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carvalho_2023 | irrelevant | 1 | 0 | The study evaluates the performance of existing PK/PD models by comparing predicted vs measured clinical endpoints (TOF ratios) but does not report new quantitative pharmacokinetic parameter values (CL, V, etc.) for rocuronium. |
| popPK | Elkhateb_2025 | irrelevant | 0 | 0 | The study is a retrospective registry analysis of clinical usage patterns of neuromuscular blockade strategies and does not report any pharmacokinetic parameters for rocuronium. |
| popPK | Grześkowiak_2023 | relevant | 10 | 3 | The paper is a population PK/PD study for rocuronium, but the specific numeric parameter estimates are in the supplementary material or referenced from a prior study, not clearly listed in the provided text. |
| popPK | Ji_2023 | irrelevant | 3 | 3 | The primary pharmacokinetic analysis and population model focus on sugammadex, with rocuronium reported only as a comparator/drug being reversed via non-compartmental analysis (AUCs) rather than a full compartmental PK model. |
| popPK | Kleijn_2011 | relevant | 9 | 2 | The paper is a population PK/PD study of rocuronium, but the specific numeric PK parameter values (CL, V, etc.) are not listed in the provided evidence, which focuses on reversal times and covariate effects. |
| popPK | Park_2014 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the EC50/EC95 of remifentanil to prevent withdrawal movements caused by rocuronium, not a pharmacokinetic study of rocuronium itself. |
| popPK | Ploeger_2009 | relevant | 7 | 0 | The paper describes a PK-PD model for rocuronium, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Tang_2025 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for sugammadex (the reversal agent), not for the subject drug rocuronium bromide. |
| popPK | Velázquez-Armenta_2002 | irrelevant | 2 | 1 | The paper reports pharmacodynamic parameters (effect-site equilibrium rate, EC50) rather than quantitative pharmacokinetic disposition parameters (CL, V, T1/2), and no specific numeric values are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:51 UTC</sub>
