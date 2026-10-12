<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;linagliptin&quot;}]"></div>

# linagliptin

- **generic name:** linagliptin
- **ATC codes:** `A10BD11`, `A10BD19`, `A10BD27`, `A10BH05`
- **DrugBank:** [DB08882](https://go.drugbank.com/drugs/DB08882) · **PubChem:** [CID 10096344](https://pubchem.ncbi.nlm.nih.gov/compound/10096344)
- **molar mass:** 472.5422 g/mol (C25H28N8O2) — DrugBank
- **groups:** approved, investigational

## About

Linagliptin is a DPP-4 inhibitor used to lower blood sugar in adults with type 2 diabetes, available alone or in fixed oral combinations with other glucose-lowering drugs. It is approved and authorised in the European Union and is widely used as an oral anti-diabetic medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q909745](https://www.wikidata.org/wiki/Q909745) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| linagliptin | parent | 472.542 | C25H28N8O2 | DrugBank | [10096344](https://pubchem.ncbi.nlm.nih.gov/compound/10096344) | Graefe-Mody_2012, Retlich_2015, Tadayasu_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 00:29 | 12:48 | 0/3/0 | 2/0/0 | 0/0/0 | 193,414/41,022 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.4), gpt-oss:120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Graefe-Mody_2012_reference](drugs/drug_linagliptin/Linagliptin_GraefeMody2012_reference.md) | — | 1-compartment (no model) | 6 | Graefe-Mody U et al., Clinical pharmacokinetics and pharmacod…, Clinical pharmacokinetics (2012) | [10.2165/11630900-000000000-00000](https://doi.org/10.2165/11630900-000000000-00000) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.409), gpt-oss:120b (not confirmed, agreement 0.409). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Retlich_2015_reference](drugs/drug_linagliptin/Linagliptin_Retlich2015_reference.md) | — | 2-compartment (no model) | 11 | Retlich S et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0232-4](https://doi.org/10.1007/s40262-014-0232-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.85), gpt-oss:120b (not confirmed, agreement 0.85). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Tadayasu_2013_reference](drugs/drug_linagliptin/Linagliptin_Tadayasu2013_reference.md) | — | 1-compartment (no model) | 8 | Tadayasu Y et al., Population pharmacokinetic/pharmacodyna…, Journal of pharmacy & pharm… (2013) | [10.18433/j3s304](https://doi.org/10.18433/j3s304) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed</span> | [Retlich_2015_DPP_4_activity](drugs/drug_linagliptin/pd_Retlich_2015_DPP_4_activity.md) | plasma DPP-4 activity ← linagliptin · direct sigmoid Emax (Hill) effect | — | Retlich S et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0232-4](https://doi.org/10.1007/s40262-014-0232-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Tadayasu_2013_DPP_4_inhibition](drugs/drug_linagliptin/pd_Tadayasu_2013_DPP_4_inhibition.md) | DPP-4 inhibition ← linagliptin · target-mediated drug disposition | — | Tadayasu Y et al., Population pharmacokinetic/pharmacodyna…, Journal of pharmacy & pharm… (2013) | [10.18433/j3s304](https://doi.org/10.18433/j3s304) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Graefe-Mody_2012.pdf` | Graefe-Mody U et al., Clinical pharmacokinetics and pharmacod…, Clinical pharmacokinetics (2012) | popPK | 9 | [10.2165/11630900-000000000-00000](https://doi.org/10.2165/11630900-000000000-00000) | [22568694](https://pubmed.ncbi.nlm.nih.gov/22568694) | The text provides quantitative PK parameters (Cmax, AUC, half-life, bioavailability, protein binding) for linagliptin in humans, though specific clearance (CL) and volume (V) values are described qualitatively or via model description rather than explicit numeric constants. |
| `Wright_2012.pdf` | Wright S et al., The concentration-dependent binding of…, International journal of cl… (2012) | popPK | 9 | [10.5414/cp201630](https://doi.org/10.5414/cp201630) | [22541836](https://pubmed.ncbi.nlm.nih.gov/22541836) | The paper describes a population PK model for linagliptin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-05T00:16:56.255158+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wright_2012 | relevant | 9 | 0 | The paper describes a population PK model for linagliptin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 00:17 UTC</sub>
