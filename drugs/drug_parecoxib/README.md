<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;parecoxib&quot;}]"></div>

# parecoxib

- **generic name:** parecoxib
- **ATC codes:** `M01AH04`
- **DrugBank:** [DB08439](https://go.drugbank.com/drugs/DB08439) · **PubChem:** [CID 119828](https://pubchem.ncbi.nlm.nih.gov/compound/119828)
- **molar mass:** 370.422 g/mol (C19H18N2O4S) — DrugBank
- **groups:** approved, investigational

## About

Parecoxib is a COX-2 inhibitor used to treat postoperative pain. It is an injectable coxib authorised in the European Union, used mainly for short-term relief of pain after surgery.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q347941](https://www.wikidata.org/wiki/Q347941) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| parecoxib | parent | 370.422 | C19H18N2O4S | DrugBank | [119828](https://pubchem.ncbi.nlm.nih.gov/compound/119828) | Tan_2016 |
| valdecoxib | metabolite | 314.359 | C16H14N2O3S | PubChem | [119607](https://pubchem.ncbi.nlm.nih.gov/compound/119607) | Tan_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:45 | 0:22 | 0/0/1 | 1/0/0 | 0/0/0 | 30,631/3,364 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Tan_2016_reference](drugs/drug_parecoxib/Parecoxib_Tan2016_reference.md) | held back | 1-compartment, IV | 8 | Tan L et al., Pharmacokinetics and analgesic effectiv…, Paediatric anaesthesia (2016) | [10.1111/pan.13009](https://doi.org/10.1111/pan.13009) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tan_2016_MME](drugs/drug_parecoxib/pd_Tan_2016_MME.md) | rescue morphine equivalents during recovery ← parecoxib · direct Emax (saturable) effect | — | Tan L et al., Pharmacokinetics and analgesic effectiv…, Paediatric anaesthesia (2016) | [10.1111/pan.13009](https://doi.org/10.1111/pan.13009) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hullett_2012.pdf` | Hullett B et al., Development of a population pharmacokin…, Anesthesiology (2012) | popPK | 10 | [10.1097/ALN.0b013e31825154ef](https://doi.org/10.1097/ALN.0b013e31825154ef) | [22450476](https://pubmed.ncbi.nlm.nih.gov/22450476) | The study is a population PK modeling study for parecoxib, but the specific quantitative parameter values (clearance, volume, etc.) are not listed in the provided text, only trends and model structure. |
| `Tan_2016.pdf` | Tan L et al., Pharmacokinetics and analgesic effectiv…, Paediatric anaesthesia (2016) | popPK | 10 | [10.1111/pan.13009](https://doi.org/10.1111/pan.13009) | [27779354](https://pubmed.ncbi.nlm.nih.gov/27779354) | The paper reports quantitative population pharmacokinetic parameter estimates (CL, V, Q) for parecoxib and its metabolite in children, with all numeric values explicitly listed in the text. |

<sub>queue written 2026-10-07T01:45:33.854572+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chaignat_2008 | irrelevant | 0 | 0 | This is a pharmacodynamic study focusing on ureteral contractility, reporting no pharmacokinetic parameters (CL, V, etc.) for parecoxib. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | This is a clinical efficacy study comparing acupressure and parecoxib for pain relief, reporting no pharmacokinetic parameters. |
| popPK | Hullett_2012 | relevant | 10 | 2 | The study is a population PK modeling study for parecoxib, but the specific quantitative parameter values (clearance, volume, etc.) are not listed in the provided text, only trends and model structure. |
| popPK | Ibrahim_2002 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of propofol (the subject drug), with parecoxib acting as a co-administered probe to check for interactions, and no quantitative disposition parameters for parecoxib itself are reported. |
| popPK | Klein_2007 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study focused on celecoxib's vascular effects, with parecoxib serving only as a negative control for coronary flow, and it reports no pharmacokinetic parameters. |
| popPK | Paech_2012 | irrelevant | 2 | 1 | The study focuses on lactation/milk transfer (M/P, AID, RID) and does not report maternal population pharmacokinetic parameters (CL, V, t1/2) for parecoxib. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:45 UTC</sub>
