<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;lurbinectedin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lurbinectedin_Fudio2021_reference&quot;,&quot;label&quot;:&quot;Fudio_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lurbinectedin/Lurbinectedin_Fudio2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lurbinectedin_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# lurbinectedin

- **generic name:** lurbinectedin
- **ATC codes:** `L01XX69`
- **DrugBank:** [DB12674](https://go.drugbank.com/drugs/DB12674) · **PubChem:** [CID 57327016](https://pubchem.ncbi.nlm.nih.gov/compound/57327016)
- **molar mass:** 784.88 g/mol (C41H44N4O10S) — DrugBank
- **groups:** approved, investigational

## About

Lurbinectedin is an anticancer medicine used to treat small cell lung cancer. It is an approved antineoplastic agent, with one product authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27254568](https://www.wikidata.org/wiki/Q27254568) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lurbinectedin | parent | 784.88 | C41H44N4O10S | DrugBank | [57327016](https://pubchem.ncbi.nlm.nih.gov/compound/57327016) | Fernández-Teruel_2022, Lubomirov_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:45 | 0:58 | 1/1/2 | 0/0/2 | 0/0/0 | 101,174/5,259 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> | [Fudio_2021_reference](drugs/drug_lurbinectedin/Lurbinectedin_Fudio2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Fudio S et al., Effect of lurbinectedin on the QTc inte…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-020-04153-6](https://doi.org/10.1007/s00280-020-04153-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Fernández-Teruel_2022_reference](drugs/drug_lurbinectedin/Lurbinectedin_FernndezTeruel2022_reference.md) | — | 1-compartment (no model) | 3 | Fernández-Teruel C et al., Integrated exposure-response analysis o…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-021-04366-3](https://doi.org/10.1007/s00280-021-04366-3) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): k12, k21</sub><br><sub>route_to: `scholar`</sub> | [Lubomirov_2025_reference](drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 3 | Lubomirov R et al., CYP3A Genotype Is Associated With Varia…, Clinical and translational… (2025) | [10.1111/cts.70173](https://doi.org/10.1111/cts.70173) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.333). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fernandez-Teruel_2019_reference](drugs/drug_lurbinectedin/Lurbinectedin_FernandezTeruel2019_reference.md) | — | 1-compartment (no model) | 0 | Fernandez-Teruel C et al., Population-Pharmacokinetic and Covariat…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0701-2](https://doi.org/10.1007/s40262-018-0701-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> | [Fudio_2021_QTcF](drugs/drug_lurbinectedin/pd_Fudio_2021_QTcF.md) | change from baseline in Fridericia’s corrected QT interval ← lurbinectedin · delayed effect through an effect compartment | model (no simulator) | Fudio S et al., Effect of lurbinectedin on the QTc inte…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-020-04153-6](https://doi.org/10.1007/s00280-020-04153-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Fudio_2023_ORR](drugs/drug_lurbinectedin/pd_Fudio_2023_ORR.md) | objective response rate (ORR) ← unbound plasma lurbinectedin area under the concentration-time curve (AUC u ) · direct sigmoid Emax (Hill) effect | model (no simulator) | Fudio S et al., A model-based head-to-head comparison o…, Frontiers in oncology (2023) | [10.3389/fonc.2023.1152371](https://doi.org/10.3389/fonc.2023.1152371) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> | [Fudio_2023_OS](drugs/drug_lurbinectedin/pd_Fudio_2023_OS.md) | overall survival (OS) ← unbound plasma lurbinectedin area under the concentration-time curve (AUC u ) · time-to-event model | — | Fudio S et al., A model-based head-to-head comparison o…, Frontiers in oncology (2023) | [10.3389/fonc.2023.1152371](https://doi.org/10.3389/fonc.2023.1152371) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lurbinectedin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `SLC22A1` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DNA (adduct).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fernandez-Teruel_2019.pdf` | Fernandez-Teruel C et al., Population-Pharmacokinetic and Covariat…, Clinical pharmacokinetics (2019) | popPK | 10 | [10.1007/s40262-018-0701-2](https://doi.org/10.1007/s40262-018-0701-2) | [30090974](https://pubmed.ncbi.nlm.nih.gov/30090974) | The paper reports a population-pharmacokinetic model for lurbinectedin with specific numeric values for total plasma clearance (11.2 L/h) and apparent volume at steady state (438 L) present in the abstract. |
| `Fernández-Teruel_2021.pdf` | Fernández-Teruel C et al., Population Pharmacokinetic-Pharmacodyna…, Journal of clinical pharmac… (2021) | popPK | 8 | [10.1002/jcph.1886](https://doi.org/10.1002/jcph.1886) | [33914350](https://pubmed.ncbi.nlm.nih.gov/33914350) | The paper reports on a population PK-PD model for lurbinectedin, but no specific quantitative PK parameter values (CL, V, etc.) are present in the provided abstract text. |

<sub>queue written 2026-10-06T20:44:55.219199+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fernández-Teruel_2021 | relevant | 8 | 0 | The paper reports on a population PK-PD model for lurbinectedin, but no specific quantitative PK parameter values (CL, V, etc.) are present in the provided abstract text. |
| popPK | Fernández-Teruel_2022 | irrelevant | 1 | 0 | The study is an exposure-response analysis reporting PK-PD model parameters (Emax, EC50) rather than primary population pharmacokinetic parameter estimates (CL, V, Q, ka), and the specific PopPK parameter estimates are referred to in the text as being in Supplementary Table S2, which is not provided. |
| popPK | Fudio_2023 | irrelevant | 3 | 0 | This is an exposure-response study that uses a pre-existing population PK model for lurbinectedin but does not report the quantitative PK parameter estimates (CL, V, Q) in the main text, referring instead to Table S1 in supplementary material. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:44 UTC</sub>
