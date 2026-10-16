<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;asparaginase&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Asparaginase_Sassen2017_reference&quot;,&quot;label&quot;:&quot;Sassen_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asparaginase/Asparaginase_Sassen2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# asparaginase

- **generic name:** asparaginase
- **ATC codes:** `L01XX02`, `LX1XX02`
- **DrugBank:** [DB00023](https://go.drugbank.com/drugs/DB00023) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Asparaginase is an enzyme medication used as an anticancer drug to treat lymphoma and lymphoid leukemia. It is an approved medicine, included on the WHO list of essential medicines, and is authorised in the European Union for precursor cell lymphoblastic leukemia-lymphoma.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105296036](https://www.wikidata.org/wiki/Q105296036) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:22 | 4:06 | 0/5/2 | 0/0/0 | 0/0/0 | 151,768/44,482 | einfracz / qwen3.8-27b | 6 | 1/5 | 5/1 | 2 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.929). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Lin_2021_reference](drugs/drug_asparaginase/Asparaginase_Lin2021_reference.md) | — | 1-compartment (no model) | 3 | Lin T et al., Population Pharmacokinetic Model Develo…, Clinical pharmacology in dr… (2021) | [10.1002/cpdd.1002](https://doi.org/10.1002/cpdd.1002) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Sassen_2017_reference](drugs/drug_asparaginase/Asparaginase_Sassen2017_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Sassen SD et al., Population pharmacokinetics of intraven…, Haematologica (2017) | [10.3324/haematol.2016.149195](https://doi.org/10.3324/haematol.2016.149195) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Avramis_2007_2_reference](drugs/drug_asparaginase/Asparaginase_Avramis2007v2_reference.md) | — | 1-compartment (no model) | 0 | Avramis VI et al., Pharmacoanalytical assays of Erwinia as…, Anticancer research (2007) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Borghorst_2012_reference](drugs/drug_asparaginase/Asparaginase_Borghorst2012_reference.md) | — | general linear (no model) | 5 | Borghorst S et al., Population pharmacokinetics of native E…, Pediatric hematology and on… (2012) | [10.3109/08880018.2011.627978](https://doi.org/10.3109/08880018.2011.627978) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hempel_2010_reference](drugs/drug_asparaginase/Asparaginase_Hempel2010_reference.md) | — | 1-compartment (no model) | 0 | Hempel G et al., A population pharmacokinetic model for…, British journal of haematol… (2010) | [10.1111/j.1365-2141.2009.07923.x](https://doi.org/10.1111/j.1365-2141.2009.07923.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lin_2023_reference](drugs/drug_asparaginase/Asparaginase_Lin2023_reference.md) | — | 1-compartment (no model) | 5 (+1 cov.) | Lin T et al., Population pharmacokinetics of intramus…, Clinical and translational… (2023) | [10.1111/cts.13499](https://doi.org/10.1111/cts.13499) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Völler_2018_reference](drugs/drug_asparaginase/Asparaginase_Vller2018_reference.md) | — | 2-compartment (no model) | 5 | Völler S et al., Pharmacokinetics of recombinant asparag…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-017-3492-5](https://doi.org/10.1007/s00280-017-3492-5) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=asparaginase).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: L-asparagine (other/unknown), SERPINA7 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 44 matched, 20 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 7  ·  extracted 0  ·  needs_review 2  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Borghorst_2012.pdf` | Borghorst S et al., Population pharmacokinetics of native E…, Pediatric hematology and on… (2012) | popPK | 10 | [10.3109/08880018.2011.627978](https://doi.org/10.3109/08880018.2011.627978) | [22376019](https://pubmed.ncbi.nlm.nih.gov/22376019) | The paper is a population pharmacokinetic study of asparaginase and explicitly lists numeric values for clearance, volumes of distribution, and intercompartmental clearance in the text. |
| `Hempel_2010.pdf` | Hempel G et al., A population pharmacokinetic model for…, British journal of haematol… (2010) | popPK | 10 | [10.1111/j.1365-2141.2009.07923.x](https://doi.org/10.1111/j.1365-2141.2009.07923.x) | [19821822](https://pubmed.ncbi.nlm.nih.gov/19821822) | The evidence explicitly reports a population PK model for pegylated-asparaginase in children with specific numeric values for volume of distribution and initial clearance. |
| `Völler_2018.pdf` | Völler S et al., Pharmacokinetics of recombinant asparag…, Cancer chemotherapy and pha… (2018) | popPK | 10 | [10.1007/s00280-017-3492-5](https://doi.org/10.1007/s00280-017-3492-5) | [29204688](https://pubmed.ncbi.nlm.nih.gov/29204688) | The abstract explicitly reports numeric population PK parameters (CL, V1, Q, V2) for asparaginase in a two-compartment model. |
| `Avramis_2007.pdf` | Avramis VI et al., Clinical pharmacology of asparaginases…, Journal of pediatric hemato… (2007) | popPK | 9 | [10.1097/MPH.0b013e318047b79d](https://doi.org/10.1097/MPH.0b013e318047b79d) | [17414566](https://pubmed.ncbi.nlm.nih.gov/17414566) | The paper is a population PK-PD modeling study for asparaginase formulations in human ALL patients, but the evidence text contains only qualitative comparisons (e.g., "inferior PK parameters") and dosing recommendations without specific numeric values for CL, V, or half-life. |
| `Avramis_2007_2.pdf` | Avramis VI et al., Pharmacoanalytical assays of Erwinia as…, Anticancer research (2007) | popPK | 9 | not captured | [17695416](https://pubmed.ncbi.nlm.nih.gov/17695416) | The paper reports a population PK-PD model simulation for asparaginase (Erwinase) in humans and provides specific quantitative values for the average half-life of elimination (15.8 +/- 1.64 hours) and PD thresholds in the text. |
| `Borghorst_2014.pdf` | Borghorst S et al., Comparative pharmacokinetic/pharmacodyn…, Cancer chemotherapy and pha… (2014) | popPK | 9 | [10.1007/s00280-014-2506-9](https://doi.org/10.1007/s00280-014-2506-9) | [24934864](https://pubmed.ncbi.nlm.nih.gov/24934864) | The paper reports a population PK model for asparaginase in dogs, but specific numeric parameter values are not included in the provided abstract text. |

<sub>queue written 2026-10-15T04:18:48.168789+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajewole_2018 | irrelevant | 0 | 0 | The paper investigates the structural and biochemical basis of potassium activation in plant l-asparaginases, not the pharmacokinetics of the therapeutic drug. |
| popPK | Appel_2008 | irrelevant | 5 | 0 | The study measures drug activity (IU/L) and substrate depletion rather than reporting quantitative compartmental pharmacokinetic parameters (CL, V, ka) for asparaginase. |
| popPK | Avramis_2005 | irrelevant | 3 | 0 | The paper is a review discussing PK/PD concepts and model findings but does not report specific quantitative pharmacokinetic parameter values (e.g., CL, Vd, t1/2) for asparaginase itself in the provided text. |
| popPK | Avramis_2007 | relevant | 9 | 2 | The paper is a population PK-PD modeling study for asparaginase formulations in human ALL patients, but the evidence text contains only qualitative comparisons (e.g., "inferior PK parameters") and dosing recommendations without specific numeric values for CL, V, or half-life. |
| popPK | Borghorst_2014 | relevant | 9 | 2 | The paper reports a population PK model for asparaginase in dogs, but specific numeric parameter values are not included in the provided abstract text. |
| popPK | Hoeben_2026 | relevant | 8 | 4 | The paper describes population PK models for asparaginase (CalPEG) in mice and humans, but the specific numeric parameter values are located in Table 1 (not provided) and Supplementary Tables/Figures. |
| popPK | Keating_1993 | irrelevant | 3 | 0 | The paper is a review/article summarizing past and present use, and while the abstract mentions a PK profile with a monophasic half-life, it does not provide specific quantitative parameter values (CL, V, ka, etc.) for asparaginase. |
| popPK | Maese_2023 | relevant | 10 | 2 | The study reports a population PK model for asparaginase (JZP458) including clearance and volume, but specific numeric parameter estimates are not present in the provided text. |
| popPK | Maqsood_2020 | irrelevant | 0 | 0 | The study characterizes the in-vitro enzymatic properties of a thermostable L-asparaginase enzyme, not its pharmacokinetics in a biological system. |
| popPK | Porta-Oltra_2021 | irrelevant | 1 | 0 | The paper is a review of pharmacotherapy in oncology that mentions asparaginase only as an example of a drug benefiting from therapeutic monitoring, without providing original quantitative PK parameters or model values. |
| popPK | Sassen_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ciprofloxacin, not asparaginase, which is only mentioned as a concomitant medication. |
| popPK | Yun_2007 | irrelevant | 0 | 0 | The paper is a structural and mechanistic study of an enzyme (AnsA) and does not report pharmacokinetic parameters for a drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:21 UTC</sub>
