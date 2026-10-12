<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;bivalirudin&quot;}]"></div>

# bivalirudin

- **generic name:** bivalirudin
- **ATC codes:** `B01AE06`
- **DrugBank:** [DB00006](https://go.drugbank.com/drugs/DB00006) · **PubChem:** [CID 16129704](https://pubchem.ncbi.nlm.nih.gov/compound/16129704)
- **molar mass:** 2180.2853 g/mol (C98H138N24O33) — DrugBank
- **groups:** approved, investigational

## About

Bivalirudin is a direct thrombin inhibitor used as an anticoagulant, notably in acute coronary syndrome and unstable angina. It is an approved antithrombotic, though one product has been withdrawn in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4919218](https://www.wikidata.org/wiki/Q4919218) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bivalirudin | parent | 2180.29 | C98H138N24O33 | DrugBank | [16129704](https://pubchem.ncbi.nlm.nih.gov/compound/16129704) | Zhang_2012 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 14:14 | 2:45 | 0/1/0 | 1/0/0 | 0/0/0 | 38,481/7,604 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2012_reference](drugs/drug_bivalirudin/Bivalirudin_Zhang2012_reference.md) | — | 2-compartment (no model) | 4 | Zhang DM et al., Population pharmacokinetics and pharmac…, Acta pharmacologica Sinica (2012) | [10.1038/aps.2012.37](https://doi.org/10.1038/aps.2012.37) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Zhang_2012_ACT](drugs/drug_bivalirudin/pd_Zhang_2012_ACT.md) | activated clotting time biomarker turnover ← bivalirudin | — | Zhang DM et al., Population pharmacokinetics and pharmac…, Acta pharmacologica Sinica (2012) | [10.1038/aps.2012.37](https://doi.org/10.1038/aps.2012.37) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Han_2019.pdf` | Han S et al., Pharmacokinetic and Pharmacodynamic Mod…, Pharmaceutical research (2019) | popPK | 10 | [10.1007/s11095-019-2676-6](https://doi.org/10.1007/s11095-019-2676-6) | [31396727](https://pubmed.ncbi.nlm.nih.gov/31396727) | The paper describes a population PK model for bivalirudin (generic CTB-001) in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

<sub>queue written 2026-10-05T14:12:07.516715+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Han_2019 | relevant | 10 | 0 | The paper describes a population PK model for bivalirudin (generic CTB-001) in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Jatis_2024 | irrelevant | 1 | 0 | The study analyzes the relationship between bivalirudin dose and aPTT response (pharmacodynamics/monitoring) rather than reporting quantitative pharmacokinetic parameters like clearance or volume of distribution. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 14:12 UTC</sub>
