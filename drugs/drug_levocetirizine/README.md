<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;levocetirizine&quot;}]"></div>

# levocetirizine

- **generic name:** levocetirizine
- **ATC codes:** `R06AE09`
- **DrugBank:** [DB06282](https://go.drugbank.com/drugs/DB06282) · **PubChem:** [CID 1549000](https://pubchem.ncbi.nlm.nih.gov/compound/1549000)
- **molar mass:** 388.89 g/mol (C21H25ClN2O3) — DrugBank
- **groups:** approved, investigational

## About

Levocetirizine is an antihistamine used to treat urticaria and seasonal allergic rhinitis. It is an approved, non-sedating antihistamine that is widely used for allergic conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421091](https://www.wikidata.org/wiki/Q421091) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| levocetirizine | parent | 388.89 | C21H25ClN2O3 | DrugBank | [1549000](https://pubchem.ncbi.nlm.nih.gov/compound/1549000) | Hussein_2005, Jeong_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:20 | 3:25 | 0/2/1 | 1/1/0 | 0/0/0 | 143,771/9,068 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.556). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Jeong_2024_reference](drugs/drug_levocetirizine/Levocetirizine_Jeong2024_reference.md) | — | 1-compartment (no model) | 2 | Jeong SH et al., Is Gender an Important Factor in the Pr…, Pharmaceutics (2024) | [10.3390/pharmaceutics16010146](https://doi.org/10.3390/pharmaceutics16010146) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.438). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Hussein_2005_reference](drugs/drug_levocetirizine/Levocetirizine_Hussein2005_reference.md) | — | 1-compartment (no model) | 7 | Hussein Z et al., Retrospective population pharmacokineti…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02242.x](https://doi.org/10.1111/j.1365-2125.2005.02242.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.167). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Simons_2005_reference](drugs/drug_levocetirizine/Levocetirizine_Simons2005_reference.md) | — | 1-compartment (no model) | 0 | Simons FE, Population pharmacokinetics of levoceti…, Pediatric allergy and immun… (2005) | [10.1111/j.1399-3038.2005.00240.x](https://doi.org/10.1111/j.1399-3038.2005.00240.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Komatsu_2019_QTca](drugs/drug_levocetirizine/pd_Komatsu_2019_QTca.md) | QTca ← levocetirizine · direct linear effect | — | Komatsu R et al., Exposure-response analysis of drug-indu…, Journal of pharmacological… (2019) | [10.1016/j.vascn.2019.106606](https://doi.org/10.1016/j.vascn.2019.106606) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Shawky_2014_Acetylcholine_induced_relaxation_of_aortic_rings](drugs/drug_levocetirizine/pd_Shawky_2014_Acetylcholine_induced_relaxation_of_aortic_rings.md) | Acetylcholine-induced relaxation of aortic rings ← none · stimulation effect | — | Shawky NM et al., Levocetirizine ameliorates high fructos…, European journal of pharmac… (2014) | [10.1016/j.ejphar.2014.07.021](https://doi.org/10.1016/j.ejphar.2014.07.021) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=levocetirizine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HRH1 (inhibitor), HRH1 (target), SLC22A11 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gupta_2006.pdf` | Gupta A et al., Stereoselective pharmacokinetics of cet…, Biopharmaceutics & drug dis… (2006) | popPK | 10 | [10.1002/bdd.509](https://doi.org/10.1002/bdd.509) | [16791848](https://pubmed.ncbi.nlm.nih.gov/16791848) | The paper reports quantitative pharmacokinetic parameters (CL, Vss) for levocetirizine derived from a compartmental model in guinea pigs. |
| `Hussein_2005.pdf` | Hussein Z et al., Retrospective population pharmacokineti…, British journal of clinical… (2005) | popPK | 10 | [10.1111/j.1365-2125.2005.02242.x](https://doi.org/10.1111/j.1365-2125.2005.02242.x) | [15606437](https://pubmed.ncbi.nlm.nih.gov/15606437) | The paper reports a population pharmacokinetic model for levocetirizine with specific numeric estimates for CL/F and V/F based on weight. |
| `Simons_2005.pdf` | Simons FE, Population pharmacokinetics of levoceti…, Pediatric allergy and immun… (2005) | popPK | 10 | [10.1111/j.1399-3038.2005.00240.x](https://doi.org/10.1111/j.1399-3038.2005.00240.x) | [15787865](https://pubmed.ncbi.nlm.nih.gov/15787865) | The paper reports a population PK model for levocetirizine and provides specific numeric slopes for body weight covariates (0.044 l/h/kg for CL, 0.639 l/kg for V) in the text, though full parameter estimates (intercepts, Q, ka) are not listed. |

<sub>queue written 2026-10-07T21:17:32.188095+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Komatsu_2019 | irrelevant | 0 | 0 | Levocetirizine is used only as a negative reference drug in a QT prolongation study, and no PK parameters are reported. |
| popPK | Melander_2025 | irrelevant | 3 | 3 | The study models cetirizine in breast milk; levocetirizine is only a comparator agent administered to one subject, with no separate PK parameters reported for it. |
| popPK | Moon_2020 | irrelevant | 4 | 0 | The study reports only non-compartmental AUC and Cmax equivalence ratios for a bioequivalence comparison, lacking compartmental PK parameters like clearance, volume, or half-life with volume. |
| popPK | Shawky_2014 | irrelevant | 0 | 0 | The study investigates the therapeutic effects of levocetirizine on insulin resistance and metabolic parameters in rats, but does not report any pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| popPK | Wu_2005 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of levocetirizine's effect on eosinophil adhesion, reporting pharmacodynamic EC50 values rather than pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:17 UTC</sub>
