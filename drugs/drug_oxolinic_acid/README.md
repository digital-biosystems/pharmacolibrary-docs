<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;oxolinic acid&quot;}]"></div>

# oxolinic acid

- **generic name:** oxolinic acid
- **ATC codes:** `J01MB05`
- **DrugBank:** [DB13627](https://go.drugbank.com/drugs/DB13627) · **PubChem:** not captured
- **molar mass:** 261.2301 g/mol (C13H11NO5) — DrugBank
- **groups:** investigational

## About

Oxolinic acid is a quinolone antibiotic that was used as a urinary anti-infective to treat bacterial infections. It is now considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q287840](https://www.wikidata.org/wiki/Q287840) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:44 | 0:42 | 0/0/0 | 0/0/0 | 0/0/0 | 27,730/1,082 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

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
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Björklund_1991.pdf` | Björklund HV et al., Comparative pharmacokinetics and bioava…, Xenobiotica; the fate of fo… (1991) | popPK | 10 | [10.3109/00498259109044401](https://doi.org/10.3109/00498259109044401) | [1763525](https://pubmed.ncbi.nlm.nih.gov/1763525) | The paper reports quantitative compartmental PK parameters (half-lives, Vdarea, bioavailability) for oxolinic acid in rainbow trout. |
| `Poher_1998.pdf` | Poher I et al., Pharmacokinetics of a discontinuous abs…, Xenobiotica; the fate of fo… (1998) | popPK | 7 | [10.1080/004982598238958](https://doi.org/10.1080/004982598238958) | [9879638](https://pubmed.ncbi.nlm.nih.gov/9879638) | The paper describes a pharmacokinetic study of oxolinic acid in turbot and reports specific numeric values for Cmax, Tmax, and bioavailability, but lacks explicit clearance or volume parameters. |
| `Halling-Sørensen_2001.pdf` | Halling-Sørensen B, Inhibition of aerobic growth and nitrif…, Archives of environmental c… (2001) | pd | 4 | [10.1007/s002440010197](https://doi.org/10.1007/s002440010197) | [11525487](https://www.ncbi.nlm.nih.gov/pubmed/11525487) | metadata signals extractable PD data (EC50) |
| `Lützhøft_1999.pdf` | Lützhøft HH et al., Algal toxicity of antibacterial agents…, Archives of environmental c… (1999) | pd | 4 | [10.1007/s002449900435](https://doi.org/10.1007/s002449900435) | [9828255](https://www.ncbi.nlm.nih.gov/pubmed/9828255) | metadata signals extractable PD data (EC50) |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 | not captured | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |
| `Wollenberger_2000.pdf` | Wollenberger L et al., Acute and chronic toxicity of veterinar…, Chemosphere (2000) | pd | 4 | [10.1016/s0045-6535(99)00443-9](https://doi.org/10.1016/s0045-6535(99)00443-9) | [10705550](https://www.ncbi.nlm.nih.gov/pubmed/10705550) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T11:44:39.148592+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dodd_1989 | irrelevant | 0 | 0 | The study is an in-vitro neurochemical investigation of receptor binding and is not a pharmacokinetic study. |
| popPK | Giraud_2004 | irrelevant | 0 | 0 | This is an antimicrobial resistance study on fish pathogens (Aeromonas salmonicida) using oxolinic acid as a test agent, not a pharmacokinetic study. |
| popPK | Halling-Sørensen_2001 | irrelevant | 0 | 0 | The study is an ecotoxicology assay measuring inhibition of bacterial growth (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Hernando_2007 | irrelevant | 0 | 0 | The paper evaluates the acute toxicity of oxolinic acid using the Vibrio fischeri bioassay and does not report any pharmacokinetic disposition parameters. |
| popPK | Lützhøft_1999 | irrelevant | 0 | 0 | The paper investigates algal toxicity (EC50 values) of oxolinic acid, not its pharmacokinetic parameters. |
| popPK | Poher_1998 | relevant | 7 | 3 | The paper describes a pharmacokinetic study of oxolinic acid in turbot and reports specific numeric values for Cmax, Tmax, and bioavailability, but lacks explicit clearance or volume parameters. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of GABA-antagonistic effects and does not report any pharmacokinetic parameters for oxolinic acid. |
| popPK | Wollenberger_2000 | irrelevant | 0 | 0 | The study reports ecotoxicity data (EC50/NOEC) for oxolinic acid in Daphnia magna, not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
