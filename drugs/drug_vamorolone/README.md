<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H02A&quot;,&quot;href&quot;:&quot;atc/H02A.md&quot;},{&quot;label&quot;:&quot;vamorolone&quot;}]"></div>

# vamorolone

- **generic name:** vamorolone
- **ATC codes:** `H02AB18`
- **DrugBank:** [DB15114](https://go.drugbank.com/drugs/DB15114) · **PubChem:** not captured
- **molar mass:** 356.462 g/mol (C22H28O4) — DrugBank
- **groups:** approved, investigational

## About

Vamorolone is a glucocorticoid used to treat Duchenne muscular dystrophy. It is authorised in the European Union and remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27089127](https://www.wikidata.org/wiki/Q27089127) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vamorolone | parent | 356.462 | C22H28O4 | DrugBank | — | Li_2024, Mavroudis_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:36 | 0:55 | 0/2/0 | 0/0/0 | 0/0/0 | 22,818/1,846 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.875). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Li_2024_reference](drugs/drug_vamorolone/Vamorolone_Li2024_reference.md) | — | 1-compartment (no model) | 4 | Li X et al., Assessing Pharmacogenomic loci Associat…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2446](https://doi.org/10.1002/jcph.2446) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Mavroudis_2019_reference](drugs/drug_vamorolone/Vamorolone_Mavroudis2019_reference.md) | — | 1-compartment (no model) | 2 | Mavroudis PD et al., Population Pharmacokinetics of Vamorolo…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1388](https://doi.org/10.1002/jcph.1388) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vamorolone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `UGT1A3` substrate, `UGT2B17` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate, `UGT2B17` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: NR3C1 (target), NR3C2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2024.pdf` | Li X et al., Assessing Pharmacogenomic loci Associat…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2446](https://doi.org/10.1002/jcph.2446) | [38682893](https://pubmed.ncbi.nlm.nih.gov/38682893) | The study reports quantitative population PK parameters (CL/F, V/F, absorption duration) for vamorolone in humans, with values explicitly listed in the abstract. |
| `Mavroudis_2019.pdf` | Mavroudis PD et al., Population Pharmacokinetics of Vamorolo…, Journal of clinical pharmac… (2019) | popPK | 10 | [10.1002/jcph.1388](https://doi.org/10.1002/jcph.1388) | [30742306](https://pubmed.ncbi.nlm.nih.gov/30742306) | The abstract reports specific quantitative parameters such as apparent clearance (2.0 L/h/kg in men, 1.7 L/h/kg in boys) and half-life (~2 hours), but full population PK model parameters (like V or Q) are likely in the full text not provided. |
| `Mummidivarpu_2026.pdf` | Mummidivarpu S et al., Exposure-response of serum biomarkers t…, Steroids (2026) | pd | 5 | [10.1016/j.steroids.2025.109721](https://doi.org/10.1016/j.steroids.2025.109721) | [41265551](https://www.ncbi.nlm.nih.gov/pubmed/41265551) | metadata signals extractable PD data (Exposure-response) |

<sub>queue written 2026-10-07T09:36:05.503381+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Khodabukus_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of LGMD2B pathology and drug efficacy but does not report any pharmacogenomic study of vamorolone's PK or PD parameters. |
| popPK | Li_2020 | irrelevant | 2 | 0 | This is an exposure-response (pharmacodynamic) study reporting Emax and E50 values, not a pharmacokinetic study reporting disposition parameters like CL, V, or ka. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The study explicitly reports that none of the tested genetic covariates had a significant impact on the pharmacokinetics of vamorolone. |
| popPK | Mummidivarpu_2026 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic exposure-response of serum proteins, not pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:36 UTC</sub>
