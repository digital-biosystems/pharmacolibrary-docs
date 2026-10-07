<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;oxyphenbutazone&quot;}]"></div>

# oxyphenbutazone

- **generic name:** oxyphenbutazone
- **ATC codes:** `M01AA03`, `M02AA04`, `S01BC02`
- **DrugBank:** [DB03585](https://go.drugbank.com/drugs/DB03585) · **PubChem:** [CID 4641](https://pubchem.ncbi.nlm.nih.gov/compound/4641)
- **molar mass:** 324.3737 g/mol (C19H20N2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Oxyphenbutazone is a non-steroidal anti-inflammatory drug of the butylpyrazolidine class that was used to treat pain and inflammation in joint and muscle disorders. It has been withdrawn from use, reportedly because of serious adverse effects, and is no longer authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4116192](https://www.wikidata.org/wiki/Q4116192) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:45 | 0:54 | 0/0/0 | 0/0/0 | 0/0/0 | 18,231/1,013 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxyphenbutazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` modulator/unknown | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PLA2G2E (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Landuyt_1993.pdf` | Landuyt J et al., The intramuscular bioavailability of a…, Journal of veterinary pharm… (1993) | popPK | 9 | [10.1111/j.1365-2885.1993.tb00216.x](https://doi.org/10.1111/j.1365-2885.1993.tb00216.x) | [8126767](https://pubmed.ncbi.nlm.nih.gov/8126767) | The paper reports PK modeling for oxyphenbutazone (as a metabolite of phenylbutazone) in horses, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided evidence. |
| `Wasfi_1997.pdf` | Wasfi IA et al., Pharmacokinetics of phenylbutazone in c…, American journal of veterin… (1997) | popPK | 9 | not captured | [9185972](https://pubmed.ncbi.nlm.nih.gov/9185972) | The study reports the elimination half-life of oxyphenbutazone (23.9 hours) in camels, but other quantitative disposition parameters (clearance, volume of distribution) for oxyphenbutazone itself are not provided in the evidence. |
| `Zaghloul_2024.pdf` | Zaghloul IY et al., Comparative pharmacokinetics of phenylb…, American journal of veterin… (2024) | popPK | 7 | [10.2460/ajvr.24.01.0012](https://doi.org/10.2460/ajvr.24.01.0012) | [38942059](https://pubmed.ncbi.nlm.nih.gov/38942059) | The study measures pharmacokinetic parameters for oxyphenbutazone (OPBZ) in horses, but the specific numeric values for clearance, volume, or half-life are not provided in the extracted text, only qualitative statements about lack of significant difference. |
| `Jaraiz_1999.pdf` | Jaraiz MV et al., Disposition and tolerance of suxibuzone…, Equine veterinary journal (1999) | pd | 5 | [10.1111/j.2042-3306.1999.tb03841.x](https://doi.org/10.1111/j.2042-3306.1999.tb03841.x) | [10505957](https://www.ncbi.nlm.nih.gov/pubmed/10505957) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T01:45:21.206766+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abidi_1982 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of tolazamide, using oxyphenbutazone as a co-administered agent to assess drug interactions, rather than modeling oxyphenbutazone's own disposition parameters. |
| popPK | Brouwers_1994 | irrelevant | 0 | 0 | The paper is a review of general drug-drug interactions for NSAIDs and does not report specific quantitative pharmacokinetic parameters for oxyphenbutazone. |
| popPK | Cavanaugh_2017 | irrelevant | 0 | 0 | The study reports Minimum Inhibitory Concentrations (MICs) for in-vitro antibacterial susceptibility testing, not pharmacokinetic disposition parameters (CL, V, etc.) for oxyphenbutazone. |
| popPK | Delbeke_1993 | irrelevant | 2 | 2 | The study focuses on the disposition of suxibuzone (the subject drug), with oxyphenbutazone serving only as a minor metabolite for which only qualitative detection and concentration ranges are provided, not full PK parameter models. |
| popPK | Jaraiz_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of suxibuzone and its metabolites phenylbutazone and oxyphenbutazone, but oxyphenbutazone is a metabolite of a different drug (suibuzone/phenylbutazone), not the subject drug of the PK model (oxyphenbutazone dosed). |
| popPK | Kadir_1997 | irrelevant | 1 | 0 | The study characterizes the pharmacokinetics of the parent drug phenylbutazone in camels, while noting that the target drug oxyphenbutazone (the metabolite) was undetectable or present in negligible amounts without providing quantitative PK parameters for it. |
| popPK | Landuyt_1993 | relevant | 9 | 2 | The paper reports PK modeling for oxyphenbutazone (as a metabolite of phenylbutazone) in horses, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided evidence. |
| popPK | Lees_1987 | irrelevant | 1 | 0 | The study is conducted on phenylbutazone (PBZ), and while oxyphenbutazone is its major metabolite, no quantitative pharmacokinetic parameters (such as clearance, volume of distribution, or rate constants) for oxyphenbutazone itself are reported, only qualitative presence and urine recovery data relative to the parent drug. |
| popPK | Lees_1988 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the parent drug phenylbutazone, not oxyphenbutazone (which is only mentioned as a metabolite detected in trace amounts). |
| popPK | Wasfi_1997 | relevant | 9 | 2 | The study reports the elimination half-life of oxyphenbutazone (23.9 hours) in camels, but other quantitative disposition parameters (clearance, volume of distribution) for oxyphenbutazone itself are not provided in the evidence. |
| popPK | Zaghloul_2024 | relevant | 7 | 1 | The study measures pharmacokinetic parameters for oxyphenbutazone (OPBZ) in horses, but the specific numeric values for clearance, volume, or half-life are not provided in the extracted text, only qualitative statements about lack of significant difference. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
