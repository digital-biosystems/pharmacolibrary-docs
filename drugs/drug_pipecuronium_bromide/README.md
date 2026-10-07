<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;pipecuronium bromide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PipecuroniumBromide_Yajima1990_reference&quot;,&quot;label&quot;:&quot;Yajima_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pipecuronium_bromide/PipecuroniumBromide_Yajima1990_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pipecuronium bromide

- **generic name:** pipecuronium bromide
- **ATC codes:** `M03AC06`
- **DrugBank:** [DB01338](https://go.drugbank.com/drugs/DB01338) · **PubChem:** [CID 50192](https://pubchem.ncbi.nlm.nih.gov/compound/50192)
- **molar mass:** 602.8912 g/mol (C35H62N4O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Pipecuronium bromide is a non-depolarising neuromuscular blocking agent, a muscle relaxant used to relax muscles during surgery. It is no longer in use, having been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817188](https://www.wikidata.org/wiki/Q20817188) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pipecuronium_bromide (pipecuronium) | metabolite | 602.891 | C35H62N4O4 | DrugBank | [50192](https://pubchem.ncbi.nlm.nih.gov/compound/50192) | Caldwell_1988, Caldwell_1989, Tassonyi_1981, Yajima_1990 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:36 | 0:40 | 1/2/1 | 0/0/0 | 0/0/0 | 48,215/4,272 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yajima_1990_reference](drugs/drug_pipecuronium_bromide/PipecuroniumBromide_Yajima1990_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Yajima C et al., [Comparative pharmacokinetics of pipecu…, Masui. The Japanese journal… (1990) | — |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tassonyi_1981_reference](drugs/drug_pipecuronium_bromide/PipecuroniumBromide_Tassonyi1981_reference.md) | — | 1-compartment (no model) | 4 | Tassonyi E et al., Pharmacokinetics of pipecurium bromide,…, Arzneimittel-Forschung (1981) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Caldwell_1988_reference](drugs/drug_pipecuronium_bromide/PipecuroniumBromide_Caldwell1988_reference.md) | — | parent + metabolite (no model) | 2 | Caldwell JE et al., Pipecuronium and pancuronium: compariso…, British journal of anaesthe… (1988) | [10.1093/bja/61.6.693](https://doi.org/10.1093/bja/61.6.693) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Caldwell_1989_reference](drugs/drug_pipecuronium_bromide/PipecuroniumBromide_Caldwell1989_reference.md) | — | 1-compartment (no model) | 3 | Caldwell JE et al., The influence of renal failure on the p…, Anesthesiology (1989) | [10.1097/00000542-198901000-00004](https://doi.org/10.1097/00000542-198901000-00004) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pipecuronium_bromide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM2 (target), CHRM3 (target), CHRNA2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Caldwell_1988.pdf` | Caldwell JE et al., Pipecuronium and pancuronium: compariso…, British journal of anaesthe… (1988) | popPK | 10 | [10.1093/bja/61.6.693](https://doi.org/10.1093/bja/61.6.693) | [2849968](https://pubmed.ncbi.nlm.nih.gov/2849968) | The abstract explicitly reports quantitative pharmacokinetic parameters for pipecuronium, including steady-state volume of distribution (Vss) and plasma clearance (Cl), with numerical values and standard deviations. |
| `Caldwell_1989.pdf` | Caldwell JE et al., The influence of renal failure on the p…, Anesthesiology (1989) | popPK | 10 | [10.1097/00000542-198901000-00004](https://doi.org/10.1097/00000542-198901000-00004) | [2536254](https://pubmed.ncbi.nlm.nih.gov/2536254) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for pipecuronium bromide in human patients with and without renal failure, with values explicitly stated in the abstract. |
| `DHonneur_1993.pdf` | D'Honneur G et al., Pharmacokinetics and pharmacodynamics o…, Anesthesia and analgesia (1993) | popPK | 10 | not captured | [8250313](https://pubmed.ncbi.nlm.nih.gov/8250313) | The study reports specific quantitative pharmacokinetic parameters (clearance, half-life, volume of distribution) for pipecuronium in human subjects. |
| `Tassonyi_1981.pdf` | Tassonyi E et al., Pharmacokinetics of pipecurium bromide,…, Arzneimittel-Forschung (1981) | popPK | 10 | not captured | [6274362](https://pubmed.ncbi.nlm.nih.gov/6274362) | The study reports quantitative pharmacokinetic parameters (Cl, Vbeta, half-lives) for pipecuronium bromide in humans, with all values explicitly provided in the text. |
| `Tassonyi_1995.pdf` | Tassonyi E et al., Pharmacokinetics of pipecuronium in inf…, European journal of drug me… (1995) | popPK | 10 | [10.1007/BF03189671](https://doi.org/10.1007/BF03189671) | [8751042](https://pubmed.ncbi.nlm.nih.gov/8751042) | The study reports specific quantitative pharmacokinetic parameters (half-life, clearance) for pipecuronium in humans using a compartmental model. |
| `Yajima_1990.pdf` | Yajima C et al., [Comparative pharmacokinetics of pipecu…, Masui. The Japanese journal… (1990) | popPK | 10 | not captured | [1976829](https://pubmed.ncbi.nlm.nih.gov/1976829) | The abstract explicitly reports quantitative pharmacokinetic parameters (clearance, volumes, half-lives) for pipecuronium bromide in humans. |
| `Vereczkey_1992.pdf` | Vereczkey L, [Pharmacokinetics and metabolism of pip…, Acta pharmaceutica Hungarica (1992) | popPK | 5 | not captured | [1323914](https://pubmed.ncbi.nlm.nih.gov/1323914) | The text confirms a two-compartment model for pipecuronium but only reports qualitative elimination half-life ranges (40 min, 44-137 min) without specific numeric values for clearance, volume, or intercompartmental clearance in the provided evidence. |

<sub>queue written 2026-10-07T02:35:43.318869+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Appadu_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding affinity, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Vereczkey_1992 | relevant | 5 | 2 | The text confirms a two-compartment model for pipecuronium but only reports qualitative elimination half-life ranges (40 min, 44-137 min) without specific numeric values for clearance, volume, or intercompartmental clearance in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:35 UTC</sub>
