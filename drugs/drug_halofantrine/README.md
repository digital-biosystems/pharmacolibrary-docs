<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;halofantrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Halofantrine_Klein2012_reference&quot;,&quot;label&quot;:&quot;Klein_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_halofantrine/Halofantrine_Klein2012_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# halofantrine

- **generic name:** halofantrine
- **ATC codes:** `P01BX01`
- **DrugBank:** [DB01218](https://go.drugbank.com/drugs/DB01218) · **PubChem:** [CID 37393](https://pubchem.ncbi.nlm.nih.gov/compound/37393)
- **molar mass:** 500.424 g/mol (C26H30Cl2F3NO) — DrugBank
- **groups:** approved, withdrawn

## About

Halofantrine is an antimalarial drug used to treat malaria caused by Plasmodium falciparum and Plasmodium vivax. It is no longer in general use, having been withdrawn, largely because of safety concerns about heart rhythm disturbances.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q947595](https://www.wikidata.org/wiki/Q947595) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| halofantrine | parent | 500.424 | C26H30Cl2F3NO | DrugBank | [37393](https://pubchem.ncbi.nlm.nih.gov/compound/37393) | Klein_2012 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:01 | 1:19 | 0/1/1 | 1/0/0 | 0/0/0 | 52,920/3,984 | ollama / glm-5.3-flash | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Klein_2012_reference](drugs/drug_halofantrine/Halofantrine_Klein2012_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Klein K et al., Population pharmacokinetics of halofant…, The Journal of pharmacy and… (2012) | [10.1111/j.2042-7158.2012.01554.x](https://doi.org/10.1111/j.2042-7158.2012.01554.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Krishna_1993_reference](drugs/drug_halofantrine/Halofantrine_Krishna1993_reference.md) | — | 1-compartment (no model) | 0 | Krishna S et al., Pharmacokinetics, efficacy and toxicity…, British journal of clinical… (1993) | [10.1111/j.1365-2125.1993.tb00419.x](https://doi.org/10.1111/j.1365-2125.1993.tb00419.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Kinoshita_2010_QaTc](drugs/drug_halofantrine/pd_Kinoshita_2010_QaTc.md) | change in heart rate-corrected QaTc interval ← halofantrine · direct Emax (saturable) effect | — | Kinoshita A et al., Effects of anti-malarial drugs on the e…, Malaria journal (2010) | [10.1186/1475-2875-9-318](https://doi.org/10.1186/1475-2875-9-318) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Klein_2012.pdf` | Klein K et al., Population pharmacokinetics of halofant…, The Journal of pharmacy and… (2012) | popPK | 10 | [10.1111/j.2042-7158.2012.01554.x](https://doi.org/10.1111/j.2042-7158.2012.01554.x) | [23058047](https://pubmed.ncbi.nlm.nih.gov/23058047) | Population PK (two-compartment, NONMEM) of halofantrine with full numeric CL, V1, CLD, V2 estimates reported directly in the abstract. |

<sub>queue written 2026-10-07T07:00:00.327636+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kinoshita_2010 | irrelevant | 0 | 0 | In-vitro isolated guinea pig heart pharmacodynamics (QT prolongation EC50) study, not a PK study reporting halofantrine disposition parameters. |
| popPK | Philipps_1998 | irrelevant | 0 | 0 | In vitro parasite susceptibility study reporting EC50 values, not pharmacokinetic disposition parameters for halofantrine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:00 UTC</sub>
