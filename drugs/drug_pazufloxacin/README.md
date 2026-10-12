<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;pazufloxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pazufloxacin_Umezaki2022_reference&quot;,&quot;label&quot;:&quot;Umezaki_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pazufloxacin/Pazufloxacin_Umezaki2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pazufloxacin

- **generic name:** pazufloxacin
- **ATC codes:** `J01MA18`
- **DrugBank:** [DB11774](https://go.drugbank.com/drugs/DB11774) · **PubChem:** [CID 65957](https://pubchem.ncbi.nlm.nih.gov/compound/65957)
- **molar mass:** 318.304 g/mol (C16H15FN2O4) — DrugBank
- **groups:** investigational

## About

Pazufloxacin is a fluoroquinolone antibacterial that has been investigated as an antituberculous drug. It is not an approved medicine in major markets such as the European Union and remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3898423](https://www.wikidata.org/wiki/Q3898423) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pazufloxacin | parent | 318.304 | C16H15FN2O4 | DrugBank | [65957](https://pubchem.ncbi.nlm.nih.gov/compound/65957) | Umezaki_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:45 | 0:55 | 1/0/0 | 0/0/0 | 0/0/0 | 41,001/5,391 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Umezaki_2022_reference](drugs/drug_pazufloxacin/Pazufloxacin_Umezaki2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Umezaki Y et al., Concentration-Dependent Activity of Paz…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11070982](https://doi.org/10.3390/antibiotics11070982) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lou_2007.pdf` | Lou S et al., Influence of cefoperazone and azithromy…, European journal of drug me… (2007) | popPK | 10 | [10.1007/BF03191007](https://doi.org/10.1007/BF03191007) | [18348471](https://pubmed.ncbi.nlm.nih.gov/18348471) | The study reports PK parameters (Cl, Vd, t1/2 beta, AUC) for pazufloxacin in rats using a two-compartmental model, but no specific numeric values are provided in the evidence text. |
| `Nakamura_2017.pdf` | Nakamura K et al., Clinical pharmacokinetics and pharmacod…, Journal of infection and ch… (2017) | popPK | 9 | [10.1016/j.jiac.2017.08.005](https://doi.org/10.1016/j.jiac.2017.08.005) | [28923301](https://pubmed.ncbi.nlm.nih.gov/28923301) | The study is a clinical PK/PD investigation of pazufloxacin in humans, but the evidence only provides summary ratios and qualitative target attainment probabilities, lacking the specific numeric values for clearance (CL), volume (V), and half-life required for parameter extraction. |

<sub>queue written 2026-10-07T11:44:52.423854+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lou_2007 | relevant | 10 | 0 | The study reports PK parameters (Cl, Vd, t1/2 beta, AUC) for pazufloxacin in rats using a two-compartmental model, but no specific numeric values are provided in the evidence text. |
| popPK | Nakamura_2017 | relevant | 9 | 3 | The study is a clinical PK/PD investigation of pazufloxacin in humans, but the evidence only provides summary ratios and qualitative target attainment probabilities, lacking the specific numeric values for clearance (CL), volume (V), and half-life required for parameter extraction. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:44 UTC</sub>
