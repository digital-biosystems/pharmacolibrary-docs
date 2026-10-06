<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;cyclobarbital&quot;}]"></div>

# cyclobarbital

- **generic name:** cyclobarbital
- **ATC codes:** `N05CA10`
- **DrugBank:** [DB13737](https://go.drugbank.com/drugs/DB13737) · **PubChem:** not captured
- **molar mass:** 236.271 g/mol (C12H16N2O3) — DrugBank
- **groups:** experimental

## About

Cyclobarbital is a barbiturate once used as a hypnotic and sedative to treat insomnia. It is currently listed only as an experimental drug and is not an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416966](https://www.wikidata.org/wiki/Q416966) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:11 | 2:08 | 0/0/0 | 0/0/0 | 0/0/0 | 14,452/873 | ollama / glm-5.3-flash | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Breimer_1976.pdf` | Breimer DD et al., Pharmacokinetics and relative bioavaila…, European journal of clinica… (1976) | popPK | 7 | [10.1007/BF00606563](https://doi.org/10.1007/BF00606563) | [989475](https://pubmed.ncbi.nlm.nih.gov/989475) | Human PK study of cyclobarbital with half-life (11.6 h) and bioavailability values in the abstract, but no CL/V or full parameter table in the evidence. |
| `Breyer-Pfaff_1984.pdf` | Breyer-Pfaff U et al., Assessment of drug metabolism in hepati…, European journal of clinica… (1984) | popPK | 7 | [10.1007/BF00546715](https://doi.org/10.1007/BF00546715) | [6143671](https://pubmed.ncbi.nlm.nih.gov/6143671) | Cyclobarbital half-life, clearance and volume of distribution are reported in humans, but only qualitatively in the abstract; numeric values are not present in the evidence. |
| `Watari_1988.pdf` | Watari N et al., Prediction of hepatic first-pass metabo…, Journal of pharmacokinetics… (1988) | popPK | 6 | [10.1007/BF01062138](https://doi.org/10.1007/BF01062138) | [3221327](https://pubmed.ncbi.nlm.nih.gov/3221327) | Cyclobarbital is one of seven barbiturates with kinetic parameters (hepatic clearance, V, ka) modeled in rabbits, but no numeric values for cyclobarbital appear in the evidence. |

<sub>queue written 2026-10-06T20:11:40.280388+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Breyer-Pfaff_1984 | relevant | 7 | 4 | Cyclobarbital half-life, clearance and volume of distribution are reported in humans, but only qualitatively in the abstract; numeric values are not present in the evidence. |
| popPK | Czyzewska-Szafran_1980 | irrelevant | 3 | 0 | Cyclobarbital is one of several hypnotics studied in rats, but no numeric PK parameters for it appear in the evidence; only hexobarbital and barbital PK are mentioned. |
| popPK | Kołaciński_1989 | irrelevant | 3 | 1 | Clinical poisoning study of forced diuresis with no quantitative PK parameters (CL, V, half-life) reported; only qualitative elimination comparisons. |
| PGx | Sakuma_1999 | not_relevant | 2 | 3 | Cyclobarbital is only used as an inducer of CYP1A2 in vitro; no gene variant/genotype effect on cyclobarbital PK/PD parameters is reported. |
| popPK | Watari_1988 | relevant | 6 | 2 | Cyclobarbital is one of seven barbiturates with kinetic parameters (hepatic clearance, V, ka) modeled in rabbits, but no numeric values for cyclobarbital appear in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
