<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;voclosporin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Voclosporin_AbdelKahaar2023_reference&quot;,&quot;label&quot;:&quot;Abdel-Kahaar_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_voclosporin/Voclosporin_AbdelKahaar2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# voclosporin

- **generic name:** voclosporin
- **ATC codes:** `L04AD03`
- **DrugBank:** [DB11693](https://go.drugbank.com/drugs/DB11693) · **PubChem:** [CID 6918486](https://pubchem.ncbi.nlm.nih.gov/compound/6918486)
- **molar mass:** 1214.646 g/mol (C63H111N11O12) — DrugBank
- **groups:** approved, investigational

## About

Voclosporin is an immunosuppressive calcineurin inhibitor used to treat lupus nephritis and has also been studied for uveitis. It is approved and authorised in the European Union for lupus nephritis, though it remains investigational for some other uses and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7939256](https://www.wikidata.org/wiki/Q7939256) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| voclosporin | parent | 1214.65 | C63H111N11O12 | DrugBank | [6918486](https://pubchem.ncbi.nlm.nih.gov/compound/6918486) | Mayo_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:07 | 0:56 | 0/1/1 | 2/0/0 | 0/0/0 | 119,346/8,900 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Abdel-Kahaar_2023_reference](drugs/drug_voclosporin/Voclosporin_AbdelKahaar2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Abdel-Kahaar E et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01246-2](https://doi.org/10.1007/s40262-023-01246-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Mayo_2014_reference](drugs/drug_voclosporin/Voclosporin_Mayo2014_reference.md) | — | 1-compartment (no model) | 2 | Mayo PR et al., Population PKPD of voclosporin in renal…, Journal of clinical pharmac… (2014) | [10.1002/jcph.237](https://doi.org/10.1002/jcph.237) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdel-Kahaar_2023_CN](drugs/drug_voclosporin/pd_Abdel_Kahaar_2023_CN.md) | Calcineurin activity ← Voclosporin · direct sigmoid Emax (Hill) effect | — | Abdel-Kahaar E et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01246-2](https://doi.org/10.1007/s40262-023-01246-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdel-Kahaar_2023_NODAT](drugs/drug_voclosporin/pd_Abdel_Kahaar_2023_NODAT.md) | New-onset diabetes ← Voclosporin · direct sigmoid Emax (Hill) effect | — | Abdel-Kahaar E et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01246-2](https://doi.org/10.1007/s40262-023-01246-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdel-Kahaar_2023_Nephro](drugs/drug_voclosporin/pd_Abdel_Kahaar_2023_Nephro.md) | Nephrotoxicity ← Voclosporin · direct sigmoid Emax (Hill) effect | — | Abdel-Kahaar E et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01246-2](https://doi.org/10.1007/s40262-023-01246-2) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Mayo_2014_CNa](drugs/drug_voclosporin/pd_Mayo_2014_CNa.md) | calcineurin activity ← voclosporin · direct sigmoid Emax (Hill) effect | model (no simulator) | Mayo PR et al., Population PKPD of voclosporin in renal…, Journal of clinical pharmac… (2014) | [10.1002/jcph.237](https://doi.org/10.1002/jcph.237) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=voclosporin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CAMLG (binder), PPP3CA (inhibitor), PPP3R1 (inhibitor), PPP3R2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mayo_2014.pdf` | Mayo PR et al., Population PKPD of voclosporin in renal…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.237](https://doi.org/10.1002/jcph.237) | [24243422](https://pubmed.ncbi.nlm.nih.gov/24243422) | The paper explicitly reports population PK parameters (CL/F, V1) for voclosporin in human renal allograft patients. |
| `Mayo_2013.pdf` | Mayo PR et al., Voclosporin food effect and single oral…, Journal of clinical pharmac… (2013) | popPK | 5 | [10.1002/jcph.114](https://doi.org/10.1002/jcph.114) | [23736966](https://pubmed.ncbi.nlm.nih.gov/23736966) | Study reports non-compartmental PK parameters (Cmax, AUC) and PKPD metrics, but does not provide compartmental parameters (CL, V, t1/2) or population PK model values. |

<sub>queue written 2026-10-07T01:06:47.632044+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mayo_2013 | irrelevant | 5 | 3 | Study reports non-compartmental PK parameters (Cmax, AUC) and PKPD metrics, but does not provide compartmental parameters (CL, V, t1/2) or population PK model values. |
| popPK | Ogando_2022 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral activity (EC50 values against SARS-CoV-2) rather than pharmacokinetic disposition parameters (CL, V, etc.) for voclosporin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:06 UTC</sub>
