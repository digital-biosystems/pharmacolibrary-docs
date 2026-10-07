<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02A&quot;,&quot;href&quot;:&quot;atc/G02A.md&quot;},{&quot;label&quot;:&quot;ergot alkaloids&quot;}]"></div>

# ergot alkaloids

- **generic name:** ergot alkaloids
- **ATC codes:** `G02AB02`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Ergot alkaloids, compounds originally isolated from the ergot fungus Claviceps purpurea, are used as uterotonics in gynaecological care. They are classified under the ATC system as uterotonic gynaecologicals, indicating continued use in human medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q12748271](https://www.wikidata.org/wiki/Q12748271) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:16 | 0:55 | 0/0/0 | 0/0/0 | 0/0/0 | 63,800/3,507 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hilke_1978.pdf` | Hilke H et al., Dihydroergotamine: pharmacokinetics and…, Acta anaesthesiologica Scan… (1978) | popPK | 10 | [10.1111/aas.1978.22.3.215](https://doi.org/10.1111/aas.1978.22.3.215) | [354304](https://pubmed.ncbi.nlm.nih.gov/354304) | The paper reports quantitative pharmacokinetic parameters (half-lives, volume of distribution, clearance) for dihydroergotamine, an ergot alkaloid, in humans. |

<sub>queue written 2026-10-07T08:15:37.958584+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Foote_2012 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study measuring vasoconstriction response, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2). |
| popPK | Kudupoje_2018 | irrelevant | 0 | 0 | The study is an ex vivo myography and in vitro adsorption experiment evaluating the vasoconstrictive response to ergotamine and the binding properties of polymers, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for the drug. |
| popPK | Larson_1995 | irrelevant | 0 | 0 | The study reports in-vitro receptor binding affinity (Ki) and functional activity (EC50) values, not pharmacokinetic parameters like clearance or volume. |
| popPK | Larson_1999 | irrelevant | 0 | 0 | The study reports receptor binding and functional assay data (Ki, EC50) in cell culture, not pharmacokinetic disposition parameters. |
| popPK | Markstein_1982 | irrelevant | 0 | 0 | The study reports in vitro dopamine receptor binding and functional assay data (EC50s) for ergot alkaloids, not pharmacokinetic disposition parameters. |
| popPK | Nesić_1992 | irrelevant | 0 | 0 | The study investigates ion channel physiology and receptor pharmacology in snail neurons, not the pharmacokinetic disposition parameters (CL, V, t1/2) of ergot alkaloids. |
| popPK | Nomoto_2005 | irrelevant | 0 | 0 | Ergot alkaloids are only mentioned in the context of a drug interaction with clarithromycin, and no quantitative PK parameters (CL, V, etc.) are reported for them. |
| popPK | Rowell_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine release from synaptosomes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Yonpiam_2021 | irrelevant | 0 | 0 | The study investigates vascular contractile effects (pharmacodynamics) in sheep but does not report quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Yonpiam_2024 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assessment of vascular contractile responses, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
