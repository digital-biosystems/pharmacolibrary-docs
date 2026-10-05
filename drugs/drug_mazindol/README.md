<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;mazindol&quot;}]"></div>

# mazindol

- **generic name:** mazindol
- **ATC codes:** `A08AA05`
- **DrugBank:** [DB00579](https://go.drugbank.com/drugs/DB00579) · **PubChem:** [CID 4020](https://pubchem.ncbi.nlm.nih.gov/compound/4020)
- **molar mass:** 284.74 g/mol (C16H13ClN2O) — DrugBank
- **groups:** approved

## About

Mazindol is a stimulant appetite suppressant used to treat obesity. It has approved status but is not authorised by the European Medicines Agency, so its availability today is limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q255680](https://www.wikidata.org/wiki/Q255680) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mazindol | parent | 284.74 | C16H13ClN2O | DrugBank | [4020](https://pubchem.ncbi.nlm.nih.gov/compound/4020) | Konofal_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:34 | 4:04 | 2/0/0 | 0/0/0 | 0/0/0 | 63,248/10,646 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Konofal_2014_basic_model](drugs/drug_mazindol/Mazindol_Konofal2014_basic_model.md) | held back | 1-compartment, oral | 2 | Konofal E et al., Pilot Phase II study of mazindol in chi…, Drug design, development an… (2014) | [10.2147/DDDT.S65495](https://doi.org/10.2147/DDDT.S65495) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Konofal_2014_final](drugs/drug_mazindol/Mazindol_Konofal2014_final.md) | held back | 1-compartment, oral | 2 | Konofal E et al., Pilot Phase II study of mazindol in chi…, Drug design, development an… (2014) | [10.2147/DDDT.S65495](https://doi.org/10.2147/DDDT.S65495) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mazindol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC18A2 (unknown), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Böhm_1995.pdf` | Böhm M et al., Evidence for reduction of norepinephrin…, Journal of the American Col… (1995) | pd | 4 | [10.1016/0735-1097(94)00353-r](https://doi.org/10.1016/0735-1097(94)00353-r) | [7798493](https://www.ncbi.nlm.nih.gov/pubmed/7798493) | metadata signals extractable PD data (EC50) |
| `Johnson_1992.pdf` | Johnson KM et al., Cocaine and dopamine differentially pro…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0922-4106(92)90159-s](https://doi.org/10.1016/0922-4106(92)90159-s) | [1446711](https://www.ncbi.nlm.nih.gov/pubmed/1446711) | metadata signals extractable PD data (EC50) |
| `Schoretsanitis_2019.pdf` | Schoretsanitis G et al., Clinically Significant Drug-Drug Intera…, CNS drugs (2019) | pgx | 8 | [10.1007/s40263-019-00683-7](https://doi.org/10.1007/s40263-019-00683-7) | [31776871](https://www.ncbi.nlm.nih.gov/pubmed/31776871) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-04T20:30:40.561355+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Böhm_1995 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| popPK | Janowsky_2016 | irrelevant | 0 | 0 | Mazindol is used only as a radioligand for binding assays in this in-vitro study of DAT modulators, not as the subject of a pharmacokinetic study. |
| popPK | Johnson_1992 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| popPK | Johnson_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated efflux in cell lines, not a pharmacokinetic study of mazindol disposition. |
| PGx | Niwa_2008 | not_relevant | 0 | 0 | The paper investigates the inhibition of CYP2D-mediated neurosteroid metabolism by mazindol, not the effect of genetic variants on mazindol's PK/PD. |
| popPK | Richfield_1991 | irrelevant | 0 | 0 | The study is an in vitro binding/autoradiography analysis of the dopamine uptake complex in rat brain, not a pharmacokinetic study of mazindol. |
| PGx | Schoretsanitis_2019 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions for ADHD agents and does not report pharmacogenomic effects on mazindol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 20:30 UTC</sub>
