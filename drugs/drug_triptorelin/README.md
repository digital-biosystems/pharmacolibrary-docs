<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02A&quot;,&quot;href&quot;:&quot;atc/L02A.md&quot;},{&quot;label&quot;:&quot;triptorelin&quot;}]"></div>

# triptorelin

- **generic name:** triptorelin
- **ATC codes:** `L02AE04`
- **DrugBank:** [DB06825](https://go.drugbank.com/drugs/DB06825) · **PubChem:** [CID 25074470](https://pubchem.ncbi.nlm.nih.gov/compound/25074470)
- **molar mass:** 1311.473 g/mol (C64H82N18O13) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Triptorelin is a gonadotropin-releasing hormone analogue used as hormonal anticancer therapy, for example in prostate cancer. It is an approved medicine, also approved for veterinary use, and is used worldwide in oncology practice.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1992452](https://www.wikidata.org/wiki/Q1992452) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| triptorelin | parent | 1311.47 | C64H82N18O13 | DrugBank | [25074470](https://pubchem.ncbi.nlm.nih.gov/compound/25074470) | Müller_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:08 | 0:38 | 0/0/4 | 1/0/0 | 0/0/0 | 102,996/2,487 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Müller_1997_group_i](drugs/drug_triptorelin/Triptorelin_Mller1997_group_i.md) | — | 1-compartment (no model) | 7 | Müller FO et al., Pharmacokinetics of triptorelin after i…, British journal of clinical… (1997) | [10.1046/j.1365-2125.1997.t01-1-00592.x](https://doi.org/10.1046/j.1365-2125.1997.t01-1-00592.x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Müller_1997_group_ii](drugs/drug_triptorelin/Triptorelin_Mller1997_group_ii.md) | — | 1-compartment (no model) | 7 | Müller FO et al., Pharmacokinetics of triptorelin after i…, British journal of clinical… (1997) | [10.1046/j.1365-2125.1997.t01-1-00592.x](https://doi.org/10.1046/j.1365-2125.1997.t01-1-00592.x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Müller_1997_group_iii](drugs/drug_triptorelin/Triptorelin_Mller1997_group_iii.md) | — | 1-compartment (no model) | 7 | Müller FO et al., Pharmacokinetics of triptorelin after i…, British journal of clinical… (1997) | [10.1046/j.1365-2125.1997.t01-1-00592.x](https://doi.org/10.1046/j.1365-2125.1997.t01-1-00592.x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Müller_1997_group_iv](drugs/drug_triptorelin/Triptorelin_Mller1997_group_iv.md) | — | 1-compartment (no model) | 7 | Müller FO et al., Pharmacokinetics of triptorelin after i…, British journal of clinical… (1997) | [10.1046/j.1365-2125.1997.t01-1-00592.x](https://doi.org/10.1046/j.1365-2125.1997.t01-1-00592.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Romero_2012_TST](drugs/drug_triptorelin/pd_Romero_2012_TST.md) | testosterone ← triptorelin · target-mediated drug disposition | — | Romero E et al., Pharmacokinetic/pharmacodynamic model o…, The Journal of pharmacology… (2012) | [10.1124/jpet.112.195560](https://doi.org/10.1124/jpet.112.195560) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=triptorelin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GNRHR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs_review 4  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Romero_2012.pdf` | Romero E et al., Pharmacokinetic/pharmacodynamic model o…, The Journal of pharmacology… (2012) | popPK | 9 | [10.1124/jpet.112.195560](https://doi.org/10.1124/jpet.112.195560) | [22691297](https://pubmed.ncbi.nlm.nih.gov/22691297) | The study describes a population PK/PD model for triptorelin, but the specific quantitative PK parameters (CL, V, etc.) are not listed in the provided text, only PK/PD constants and a minimal concentration threshold. |
| `Wang_2026.pdf` | Wang K et al., Population Pharmacokinetics for Pediatr…, Clinical pharmacokinetics (2026) | popPK | 9 | [10.1007/s40262-026-01634-4](https://doi.org/10.1007/s40262-026-01634-4) | [41957338](https://pubmed.ncbi.nlm.nih.gov/41957338) | The paper reports a population PK model for triptorelin with allometric scaling exponents, but the specific numeric parameter values (CL, V, Q, ka estimates) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-06T22:08:27.080231+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kwok_2015 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity investigation reporting EC50 values for cell killing, not pharmacokinetic disposition parameters (CL, V, ka) or PK models for triptorelin. |
| popPK | Larivière_2008 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of intracellular signaling (cAMP pathway) in gonadotrope cells, reporting no pharmacokinetic parameters for triptorelin. |
| popPK | Melado_2026 | irrelevant | 0 | 0 | The study compares IVF clinical outcomes using triptorelin as a trigger agent and does not report any pharmacokinetic parameters. |
| popPK | Romero_2012 | relevant | 9 | 2 | The study describes a population PK/PD model for triptorelin, but the specific quantitative PK parameters (CL, V, etc.) are not listed in the provided text, only PK/PD constants and a minimal concentration threshold. |
| popPK | Tornøe_2007 | irrelevant | 3 | 2 | The study reports PK/PD parameters for LH and testosterone, with triptorelin serving only as a stimulant in the mechanistic model of the HPG axis; triptorelin's own clearance or volume parameters are not reported in the provided evidence. |
| popPK | Wang_2026 | relevant | 9 | 2 | The paper reports a population PK model for triptorelin with allometric scaling exponents, but the specific numeric parameter values (CL, V, Q, ka estimates) are not explicitly listed in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:08 UTC</sub>
