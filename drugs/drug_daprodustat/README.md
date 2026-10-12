<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;daprodustat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daprodustat_Mahar2024_reference&quot;,&quot;label&quot;:&quot;Mahar_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daprodustat/Daprodustat_Mahar2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# daprodustat

- **generic name:** daprodustat
- **ATC codes:** `B03XA07`
- **DrugBank:** [DB11682](https://go.drugbank.com/drugs/DB11682) · **PubChem:** [CID 91617630](https://pubchem.ncbi.nlm.nih.gov/compound/91617630)
- **molar mass:** 393.44 g/mol (C19H27N3O6) — DrugBank
- **groups:** approved, investigational

## About

Daprodustat is an antianemic medicine used to treat anemia, including anemia associated with chronic kidney disease. It is an approved drug, though one marketing application in the European Union was withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27076986](https://www.wikidata.org/wiki/Q27076986) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| daprodustat | parent | 393.44 | C19H27N3O6 | DrugBank | [91617630](https://pubchem.ncbi.nlm.nih.gov/compound/91617630) | Mahar_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 20:53 | 2:58 | 1/0/0 | 1/0/0 | 0/0/0 | 56,199/5,522 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Mahar_2024_reference](drugs/drug_daprodustat/Daprodustat_Mahar2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Mahar KM et al., Integrated Population Pharmacokinetics…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01417-9](https://doi.org/10.1007/s40262-024-01417-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [Bailey_2019_Hgb](drugs/drug_daprodustat/pd_Bailey_2019_Hgb.md) | hemoglobin ← daprodustat · direct Emax (saturable) effect | — | Bailey CK et al., A randomized, 29-day, dose-ranging, eff…, BMC nephrology (2019) | [10.1186/s12882-019-1547-z](https://doi.org/10.1186/s12882-019-1547-z) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=daprodustat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor/substrate, `CYP3A4` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` substrate, `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: EGLN1 (inhibitor), EGLN2 (inhibitor), EGLN3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mahar_2024.pdf` | Mahar KM et al., Integrated Population Pharmacokinetics…, Clinical pharmacokinetics (2024) | popPK | 10 | [10.1007/s40262-024-01417-9](https://doi.org/10.1007/s40262-024-01417-9) | [39259485](https://pubmed.ncbi.nlm.nih.gov/39259485) | The paper reports a population pharmacokinetic model for daprodustat with specific numeric values for oral clearance (24.6 L/h) and volume of distribution (26.9 L) provided in the abstract. |
| `Janssens_2021.pdf` | Janssens LK et al., Sensing an Oxygen Sensor: Development a…, Analytical chemistry (2021) | pd | 4 | [10.1021/acs.analchem.1c02923](https://doi.org/10.1021/acs.analchem.1c02923) | [34677954](https://www.ncbi.nlm.nih.gov/pubmed/34677954) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-05T20:51:08.936701+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bailey_2019 | relevant | 4 | 5 | The paper reports standard non-compartmental PK parameters (Cmax, AUC, t1/2) for daprodustat in Table S5, but lacks compartmental model parameters (CL, V, Q) required for population PK extraction. |
| popPK | Janssens_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring HIF heterodimerization and potency (EC50), not pharmacokinetic disposition parameters. |
| popPK | Mahar_2026 | relevant | 8 | 2 | The paper describes a population PK model for daprodustat and reports specific covariate effects (e.g., 42% reduction in clearance with clopidogrel, 46% higher ka in non-dialysis patients), but the primary numeric parameter estimates (CL, V, Q, ka values) are not explicitly listed in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 20:51 UTC</sub>
