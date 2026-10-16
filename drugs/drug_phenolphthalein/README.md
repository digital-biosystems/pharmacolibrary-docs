<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;phenolphthalein&quot;}]"></div>

# phenolphthalein

- **generic name:** phenolphthalein
- **ATC codes:** `A06AB04`
- **DrugBank:** [DB04824](https://go.drugbank.com/drugs/DB04824) · **PubChem:** [CID 4764](https://pubchem.ncbi.nlm.nih.gov/compound/4764)
- **molar mass:** 318.3228 g/mol (C20H14O4) — DrugBank
- **groups:** approved, withdrawn

## About

Phenolphthalein was a contact laxative used to treat constipation. It has been withdrawn from use because it was found to be a carcinogen.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q187921](https://www.wikidata.org/wiki/Q187921) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenolphthalein di[35S]sulphate | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 01:14 | 0:10 | 0/1/0 | 0/0/0 | 0/0/0 | 14,968/507 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Powell_1975_reference](drugs/drug_phenolphthalein/Phenolphthalein_Powell1975_reference.md) | — | 1-compartment (no model) | 0 | Powell GM et al., A model system for investigating the bi…, The Biochemical journal (1975) | [10.1042/bj1480303](https://doi.org/10.1042/bj1480303) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phenolphthalein).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `UGT1A9` unknown | DrugBank actor |
| metabolism | liver | `UGT1A9` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (target), NR1I2 (unknown), NR1I3 (unknown), SHBG (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lewis_2007.pdf` | Lewis BC et al., Amino terminal domains of human UDP-glu…, Biochemical pharmacology (2007) | pd | 4 | [10.1016/j.bcp.2006.12.021](https://doi.org/10.1016/j.bcp.2006.12.021) | [17223084](https://www.ncbi.nlm.nih.gov/pubmed/17223084) | metadata signals extractable PD data (sigmoid) |
| `Ghosal_2011.pdf` | Ghosal A et al., Characterization of human liver enzymes…, Drug metabolism and disposi… (2011) | pgx | 7 | [10.1124/dmd.110.036996](https://doi.org/10.1124/dmd.110.036996) | [21123164](https://www.ncbi.nlm.nih.gov/pubmed/21123164) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-16T08:33:21.601273+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ghosal_2011 | not_relevant | 0 | 0 | The paper reports on the metabolism of boceprevir, where phenolphthalein is used only as a mechanism-based inhibitor to identify the enzyme responsible for reduction. |
| popPK | Lewis_2007 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Lewis_2007 | not_relevant | 0 | 0 | The paper focuses on the structural and functional characterization of UGT enzymes (substrate selectivity and autoactivation) and does not report pharmacodynamic or exposure-response relationships for phenolphthalein. |
| PGx | Lewis_2007 | not_relevant | 0 | 0 | The paper focuses on the structural basis of substrate selectivity and autoactivation for UGT isoforms, likely using model substrates, and does not report pharmacogenomic effects on the PK/PD of phenolphthalein. |
| popPK | Powell_1975 | relevant | 5 | 4 | Study reports a two-compartment PK model and rate constants (k1, a) for the biliary excretion of phenolphthalein di-sulphate in rats, providing numeric values in Table 2 but not standard systemic clearance or volume parameters for the parent drug. |
| popPK | Rao_1976 | irrelevant | 0 | 0 | The study investigates the kinetic properties of estrone glucuronyltransferase, with phenolphthalein listed only as a non-competitive inhibitor in an in vitro assay, rather than being the subject of pharmacokinetic analysis. |
| PD | Rao_1976 | not_relevant | 0 | 0 | The paper investigates the enzyme kinetics of estrone glucuronyltransferase and mentions phenolphthalein only as a noncompetitive inhibitor without providing specific numeric PD parameters (e.g., Ki, IC50) or an exposure-response relationship for phenolphthalein. |
| popPK | Rosemond_2004 | irrelevant | 0 | 0 | Phenolphthalein is used solely as a chemical inhibitor to probe enzyme mechanisms for the drug S-1360, not as the subject drug for PK parameter determination. |
| PD | Rosemond_2004 | not_relevant | 0 | 0 | The paper reports in vitro enzymology and inhibition kinetics for S-1360 metabolism; phenolphthalein is used only as a chemical inhibitor to identify the enzyme family, not as a drug with a pharmacodynamic exposure-response relationship. |
| PGx | Uesawa_2007 | not_relevant | 0 | 0 | The paper focuses on the metabolism of dulcin and mentions phenolphthalein only as a competitive inhibitor, not reporting pharmacogenomic effects on phenolphthalein's PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 01:14 UTC</sub>
