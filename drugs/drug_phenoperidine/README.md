<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;phenoperidine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenoperidine_Fischler1985_reference&quot;,&quot;label&quot;:&quot;Fischler_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_phenoperidine/Phenoperidine_Fischler1985_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# phenoperidine

- **generic name:** phenoperidine
- **ATC codes:** `N01AH04`
- **DrugBank:** [DB13605](https://go.drugbank.com/drugs/DB13605) · **PubChem:** not captured
- **molar mass:** 367.489 g/mol (C23H29NO3) — DrugBank
- **groups:** experimental

## About

Phenoperidine is an opioid used as an analgesic component of general anesthesia. It is used only in hospital settings during anesthesia and is available in only a few countries, mainly France.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7181394](https://www.wikidata.org/wiki/Q7181394) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenoperidine | parent | 367.489 | C23H29NO3 | DrugBank | — | Fischler_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:27 | 2:06 | 1/0/0 | 0/0/0 | 0/0/0 | 20,316/1,692 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Fischler_1985_reference](drugs/drug_phenoperidine/Phenoperidine_Fischler1985_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Fischler M et al., Pharmacokinetics of phenoperidine in an…, British journal of anaesthe… (1985) | [10.1093/bja/57.9.872](https://doi.org/10.1093/bja/57.9.872) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fischler_1985.pdf` | Fischler M et al., Pharmacokinetics of phenoperidine in an…, British journal of anaesthe… (1985) | popPK | 10 | [10.1093/bja/57.9.872](https://doi.org/10.1093/bja/57.9.872) | [4027103](https://pubmed.ncbi.nlm.nih.gov/4027103) | The study reports quantitative population pharmacokinetic parameters (CL, VSS, half-lives) for phenoperidine in humans, with all numeric values explicitly stated in the abstract. |
| `Calvey_1983.pdf` | Calvey TN et al., Effect of antacids on the plasma concen…, British journal of anaesthe… (1983) | popPK | 8 | [10.1093/bja/55.6.535](https://doi.org/10.1093/bja/55.6.535) | [6860522](https://pubmed.ncbi.nlm.nih.gov/6860522) | The study reports quantitative PK parameters (bioavailability and clearance trends) for phenoperidine in humans, with specific values provided in the text. |
| `Milne_1983.pdf` | Milne LA et al., Effect of urine pH on the elimination o…, British journal of clinical… (1983) | popPK | 8 | [10.1111/j.1365-2125.1983.tb02150.x](https://doi.org/10.1111/j.1365-2125.1983.tb02150.x) | [6882616](https://pubmed.ncbi.nlm.nih.gov/6882616) | The study reports on the effect of urine pH on the clearance of phenoperidine in humans, but the specific quantitative parameter values (numeric clearance rates, volumes, etc.) are not present in the provided text, only qualitative statements of significance. |
| `Fischler_1985_2.pdf` | Fischler M et al., Pharmacokinetics of phenoperidine in pa…, British journal of anaesthe… (1985) | popPK | 5 | [10.1093/bja/57.9.877](https://doi.org/10.1093/bja/57.9.877) | [4027104](https://pubmed.ncbi.nlm.nih.gov/4027104) | The abstract describes qualitative changes in phenoperidine concentrations during surgery but does not report specific numeric population PK parameters (CL, V, ka) in the provided evidence. |

<sub>queue written 2026-10-07T04:27:00.571318+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calvey_1986 | irrelevant | 0 | 0 | no_text gate: only 33 chars of text extracted (&lt; 400) |
| popPK | Fischler_1985_2 | irrelevant | 5 | 0 | The abstract describes qualitative changes in phenoperidine concentrations during surgery but does not report specific numeric population PK parameters (CL, V, ka) in the provided evidence. |
| popPK | Isherwood_1984 | irrelevant | 2 | 0 | Although the abstract discusses the pharmacokinetics of phenoperidine (clearance, volume, half-life), it provides no specific numeric values for these parameters in the provided text. |
| popPK | Milne_1983 | relevant | 8 | 2 | The study reports on the effect of urine pH on the clearance of phenoperidine in humans, but the specific quantitative parameter values (numeric clearance rates, volumes, etc.) are not present in the provided text, only qualitative statements of significance. |
| popPK | Royer_1978 | irrelevant | 0 | 0 | The paper is a review of the pharmacology of morphine and its derivatives and does not report any quantitative pharmacokinetic parameter values for phenoperidine. |
| popPK | Saumet_1986 | irrelevant | 0 | 0 | The study investigates thermal and vascular effects of anaesthesia and does not report pharmacokinetic parameters for phenoperidine. |
| popPK | Saumet_1986_2 | irrelevant | 0 | 0 | The study measures skin blood flow parameters (thermal clearance, pulse amplitude) during anesthesia, where phenoperidine is merely one of the induction agents, and no pharmacokinetic parameters (CL, V, etc.) for phenoperidine are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:27 UTC</sub>
