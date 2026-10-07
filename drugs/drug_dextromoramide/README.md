<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;dextromoramide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dextromoramide_Lanon1989_reference&quot;,&quot;label&quot;:&quot;Lan\u00e7on_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dextromoramide/Dextromoramide_Lanon1989_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dextromoramide

- **generic name:** dextromoramide
- **ATC codes:** `N02AC01`
- **DrugBank:** [DB01529](https://go.drugbank.com/drugs/DB01529) · **PubChem:** [CID 92943](https://pubchem.ncbi.nlm.nih.gov/compound/92943)
- **molar mass:** 392.543 g/mol (C25H32N2O2) — DrugBank
- **groups:** experimental, illicit

## About

Dextromoramide is a narcotic opioid analgesic, classified among diphenylpropylamine derivatives, that has been used as a painkiller. It is not an approved medicine today; databases list it as experimental and illicit, so it appears to have no current authorised medical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408446](https://www.wikidata.org/wiki/Q408446) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dextromoramide | parent | 392.543 | C25H32N2O2 | DrugBank | [92943](https://pubchem.ncbi.nlm.nih.gov/compound/92943) | Lançon_1989 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:16 | 0:21 | 1/0/0 | 0/0/0 | 0/0/0 | 21,627/1,554 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lançon_1989_reference](drugs/drug_dextromoramide/Dextromoramide_Lanon1989_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Lançon JP et al., [Pharmacokinetics of dextromoramide in…, Annales francaises d'anesth… (1989) | [10.1016/s0750-7658(89)80015-2](https://doi.org/10.1016/s0750-7658(89)80015-2) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lançon_1989.pdf` | Lançon JP et al., [Pharmacokinetics of dextromoramide in…, Annales francaises d'anesth… (1989) | popPK | 10 | [10.1016/s0750-7658(89)80015-2](https://doi.org/10.1016/s0750-7658(89)80015-2) | [2576345](https://pubmed.ncbi.nlm.nih.gov/2576345) | The text explicitly reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance) for dextromoramide in humans. |
| `Pagani_1989.pdf` | Pagani I et al., Pharmacokinetics of dextromoramide in s…, Fundamental & clinical phar… (1989) | popPK | 10 | [10.1111/j.1472-8206.1989.tb00027.x](https://doi.org/10.1111/j.1472-8206.1989.tb00027.x) | [2714730](https://pubmed.ncbi.nlm.nih.gov/2714730) | The abstract provides explicit quantitative pharmacokinetic parameters (clearance, volume of distribution, half-lives) for dextromoramide in human patients. |
| `Ufkes_1998.pdf` | Ufkes JG et al., Determination and pharmacokinetics of d…, Pharmacy world & science :… (1998) | popPK | 10 | [10.1023/a:1008699623190](https://doi.org/10.1023/a:1008699623190) | [9584342](https://pubmed.ncbi.nlm.nih.gov/9584342) | The study reports quantitative pharmacokinetic parameters for dextromoramide, specifically elimination half-life (mean 71 min, range 31-152 min), in human subjects, though other parameters like CL and V are not explicitly listed as numeric values in the provided text. |

<sub>queue written 2026-10-07T05:16:30.365702+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gourlay_1997 | irrelevant | 0 | 0 | Dextromoramide is only used as a rescue medication comparator in a morphine pharmacokinetic study, and no dextromoramide PK parameters are reported. |
| popPK | Jones_1996 | irrelevant | 2 | 0 | The study assesses dextromoramide pharmacokinetics, but the provided evidence contains no quantitative parameter values, only qualitative descriptions of variability and absorption issues. |
| popPK | Nicholson_2004 | irrelevant | 0 | 0 | The paper is a clinical review of methadone where dextromoramide serves only as a comparator arm in one trial, with no pharmacokinetic parameters reported. |
| popPK | Royer_1978 | irrelevant | 1 | 0 | The text is a general review of morphine and its derivatives discussing pharmacodynamics and duration of action, but it does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for dextromoramide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:16 UTC</sub>
