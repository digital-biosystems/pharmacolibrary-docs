<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;nabumetone&quot;}]"></div>

# nabumetone

- **generic name:** nabumetone
- **ATC codes:** `M01AX01`
- **DrugBank:** [DB00461](https://go.drugbank.com/drugs/DB00461) · **PubChem:** [CID 4409](https://pubchem.ncbi.nlm.nih.gov/compound/4409)
- **molar mass:** 228.2863 g/mol (C15H16O2) — DrugBank
- **groups:** approved

## About

Nabumetone is a non-steroidal anti-inflammatory drug used to treat pain and inflammation in conditions such as osteoarthritis and rheumatoid arthritis. It is an approved medicine that remains in use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425207](https://www.wikidata.org/wiki/Q425207) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 6-methoxy-2-naphythylacetic acid | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:06 | 0:06 | 0/1/0 | 0/0/0 | 0/0/0 | 10,534/991 | einfracz / qwen3.8-27b | 9 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Brier_1995_reference](drugs/drug_nabumetone/Nabumetone_Brier1995_reference.md) | — | 1-compartment (no model) | 0 | Brier ME et al., Population pharmacokinetics of the acti…, Clinical pharmacology and t… (1995) | [10.1016/0009-9236(95)90224-4](https://doi.org/10.1016/0009-9236(95)90224-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nabumetone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C9` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AKR1C1 (substrate), AKR1C2 (substrate), AKR1C4 (substrate), HSD11B1 (substrate), MPO (inhibitor), PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brier_1995.pdf` | Brier ME et al., Population pharmacokinetics of the acti…, Clinical pharmacology and t… (1995) | popPK | 10 | [10.1016/0009-9236(95)90224-4](https://doi.org/10.1016/0009-9236(95)90224-4) | [7781261](https://pubmed.ncbi.nlm.nih.gov/7781261) | The study reports quantitative population PK parameters (CL, V, half-life) for the active metabolite of nabumetone in humans, with specific numeric ranges and point estimates provided in the abstract. |
| `Soma_1996.pdf` | Soma LR et al., Disposition and excretion of 6-methoxy-…, American journal of veterin… (1996) | popPK | 10 | not captured | [8712517](https://pubmed.ncbi.nlm.nih.gov/8712517) | The study reports quantitative PK parameters (CL, Vd, half-lives) for the active metabolite of nabumetone in horses. |
| `McMahon_1987.pdf` | McMahon FG et al., Nabumetone kinetics in the young and el…, The American journal of med… (1987) | popPK | 9 | [10.1016/0002-9343(87)90603-6](https://doi.org/10.1016/0002-9343(87)90603-6) | [3688002](https://pubmed.ncbi.nlm.nih.gov/3688002) | Study reports single-compartment PK parameters (Cmax, AUC, t1/2, ke) for nabumetone in humans, but does not explicitly state Clearance (CL) or Volume (V) values required for the specific parameter list, though they are derivable. |

<sub>queue written 2026-10-07T01:06:47.695795+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adegoke_2007 | irrelevant | 0 | 0 | The paper describes a colorimetric analytical method for determining nabumetone in tablets, not a pharmacokinetic study. |
| popPK | McMahon_1987 | relevant | 9 | 4 | Study reports single-compartment PK parameters (Cmax, AUC, t1/2, ke) for nabumetone in humans, but does not explicitly state Clearance (CL) or Volume (V) values required for the specific parameter list, though they are derivable. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:06 UTC</sub>
