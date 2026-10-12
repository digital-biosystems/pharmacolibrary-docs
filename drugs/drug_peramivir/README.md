<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;peramivir&quot;}]"></div>

# peramivir

- **generic name:** peramivir
- **ATC codes:** `J05AH03`
- **DrugBank:** [DB06614](https://go.drugbank.com/drugs/DB06614) · **PubChem:** [CID 154234](https://pubchem.ncbi.nlm.nih.gov/compound/154234)
- **molar mass:** 328.4072 g/mol (C15H28N4O4) — DrugBank
- **groups:** approved, investigational

## About

Peramivir is an antiviral drug used to treat influenza. It is an approved neuraminidase inhibitor, though one product has been withdrawn from the European Union market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412734](https://www.wikidata.org/wiki/Q412734) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:22 | 0:14 | 0/0/0 | 1/0/0 | 0/0/0 | 18,746/886 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bang_2022_EC50_RT_PCR](drugs/drug_peramivir/pd_Bang_2022_EC50_RT_PCR.md) | SFTSV replication inhibition (viral genome, RT-PCR) ← peramivir · inhibition effect | — | Bang MS et al., Effective Drugs Against Severe Fever Wi…, Frontiers in medicine (2022) | [10.3389/fmed.2022.839215](https://doi.org/10.3389/fmed.2022.839215) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bang_2022_EC50_plaque](drugs/drug_peramivir/pd_Bang_2022_EC50_plaque.md) | SFTSV plaque inhibition (plaque assay) ← peramivir · inhibition effect | — | Bang MS et al., Effective Drugs Against Severe Fever Wi…, Frontiers in medicine (2022) | [10.3389/fmed.2022.839215](https://doi.org/10.3389/fmed.2022.839215) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Matsuo_2015.pdf` | Matsuo Y et al., Population pharmacokinetics of peramivi…, Antimicrobial agents and ch… (2015) | popPK | 10 | [10.1128/AAC.00799-15](https://doi.org/10.1128/AAC.00799-15) | [26282420](https://pubmed.ncbi.nlm.nih.gov/26282420) | Population PK (three-compartment) model of peramivir in humans, but numeric parameter values (CL, V, Q) are not present in the abstract text. |
| `Sugaya_2012.pdf` | Sugaya N et al., Efficacy, safety, and pharmacokinetics…, Antimicrobial agents and ch… (2012) | popPK | 8 | [10.1128/AAC.00132-11](https://doi.org/10.1128/AAC.00132-11) | [22024821](https://pubmed.ncbi.nlm.nih.gov/22024821) | Population PK analysis of peramivir in children is described, but no numeric parameter values (CL, V, etc.) appear in the evidence, likely in tables/supplement not provided. |

<sub>queue written 2026-10-07T16:22:30.399908+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bang_2022 | irrelevant | 0 | 0 | In vitro antiviral EC50 study against SFTSV; no PK disposition parameters (CL, V, half-life, PK model) for peramivir are reported. |
| popPK | Baum_2003 | irrelevant | 0 | 0 | In-vitro enzymology/resistance study with binding constants (Ki, IC50), no pharmacokinetic disposition parameters for peramivir. |
| popPK | Matsuo_2015 | relevant | 10 | 3 | Population PK (three-compartment) model of peramivir in humans, but numeric parameter values (CL, V, Q) are not present in the abstract text. |
| popPK | Sidwell_2002 | irrelevant | 2 | 0 | Review of efficacy/tolerability with no numeric PK parameters; the PK study is only mentioned without values. |
| popPK | Sugaya_2012 | relevant | 8 | 3 | Population PK analysis of peramivir in children is described, but no numeric parameter values (CL, V, etc.) appear in the evidence, likely in tables/supplement not provided. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | Medicinal chemistry study of peramivir phosphonate derivatives with no PK disposition parameters for peramivir. |
| popPK | Wang_2018 | irrelevant | 1 | 0 | Medicinal chemistry study of peramivir conjugates with no PK disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
