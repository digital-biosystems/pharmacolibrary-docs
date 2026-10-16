<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;fosamprenavir&quot;}]"></div>

# fosamprenavir

- **generic name:** fosamprenavir
- **ATC codes:** `J05AE07`
- **DrugBank:** [DB01319](https://go.drugbank.com/drugs/DB01319) · **PubChem:** [CID 131536](https://pubchem.ncbi.nlm.nih.gov/compound/131536)
- **molar mass:** 585.607 g/mol (C25H36N3O9PS) — DrugBank
- **groups:** approved, investigational

## About

Fosamprenavir is an antiviral protease inhibitor used to treat HIV infection. It is an approved drug, although one product has been withdrawn in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1385311](https://www.wikidata.org/wiki/Q1385311) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fosamprenavir | parent | 585.607 | C25H36N3O9PS | DrugBank | [131536](https://pubchem.ncbi.nlm.nih.gov/compound/131536) | Dailly_2008 |
| amprenavir | metabolite | 505.63 | C25H35N3O6S | PubChem | [65016](https://pubchem.ncbi.nlm.nih.gov/compound/65016) | Dailly_2008 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:34 | 1:25 | 0/0/1 | 1/0/0 | 0/0/0 | 38,100/7,078 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Dailly_2008_reference](drugs/drug_fosamprenavir/Fosamprenavir_Dailly2008_reference.md) | — | 1-compartment (no model) | 1 | Dailly E et al., Impact of nevirapine or efavirenz co-ad…, Fundamental & clinical phar… (2008) | [10.1111/j.1472-8206.2007.00556.x](https://doi.org/10.1111/j.1472-8206.2007.00556.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Kan_2025_DENV_infectivity](drugs/drug_fosamprenavir/pd_Kan_2025_DENV_infectivity.md) | DENV infectivity ← fosamprenavir (FPV) · inhibition effect | — | Kan JY et al., Darunavir inhibits dengue virus replica…, Biochemical pharmacology (2025) | [10.1016/j.bcp.2025.116839](https://doi.org/10.1016/j.bcp.2025.116839) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Kan_2025_virus_yield](drugs/drug_fosamprenavir/pd_Kan_2025_virus_yield.md) | virus yield ← fosamprenavir (FPV) · inhibition effect | — | Kan JY et al., Darunavir inhibits dengue virus replica…, Biochemical pharmacology (2025) | [10.1016/j.bcp.2025.116839](https://doi.org/10.1016/j.bcp.2025.116839) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fosamprenavir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dailly_2008.pdf` | Dailly E et al., Impact of nevirapine or efavirenz co-ad…, Fundamental & clinical phar… (2008) | popPK | 10 | [10.1111/j.1472-8206.2007.00556.x](https://doi.org/10.1111/j.1472-8206.2007.00556.x) | [18251726](https://pubmed.ncbi.nlm.nih.gov/18251726) | Population pharmacokinetics reports numeric amprenavir clearance after fosamprenavir/ritonavir dosing. |
| `Barbour_2014.pdf` | Barbour AM et al., Population pharmacokinetic modeling and…, Journal of clinical pharmac… (2014) | popPK | 9 | [10.1002/jcph.205](https://doi.org/10.1002/jcph.205) | [25272370](https://pubmed.ncbi.nlm.nih.gov/25272370) | It models amprenavir after fosamprenavir dosing, but no numeric PK parameter values are present in the evidence. |

<sub>queue written 2026-10-07T17:32:57.613256+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barbour_2014 | relevant | 9 | 0 | It models amprenavir after fosamprenavir dosing, but no numeric PK parameter values are present in the evidence. |
| popPK | Dolton_2014 | irrelevant | 0 | 0 | Fosamprenavir is only a coadministered drug affecting posaconazole clearance; no fosamprenavir disposition parameters are reported. |
| popPK | Jacqmin_2013 | irrelevant | 0 | 0 | Fosamprenavir is only a background-treatment covariate; no fosamprenavir disposition parameters are reported. |
| popPK | Kan_2025 | irrelevant | 0 | 0 | Fosamprenavir is evaluated for antiviral efficacy, with no quantitative pharmacokinetic disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:33 UTC</sub>
