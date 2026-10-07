<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;tirilazad&quot;}]"></div>

# tirilazad

- **generic name:** tirilazad
- **ATC codes:** `N07XX01`
- **DrugBank:** [DB13050](https://go.drugbank.com/drugs/DB13050) · **PubChem:** [CID 104903](https://pubchem.ncbi.nlm.nih.gov/compound/104903)
- **molar mass:** 624.874 g/mol (C38H52N6O2) — DrugBank
- **groups:** investigational

## About

Tirilazad is an antioxidant and neuroprotective agent that was investigated as a treatment for nervous system conditions. It remains investigational and is not an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7809222](https://www.wikidata.org/wiki/Q7809222) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:00 | 1:10 | 0/1/0 | 0/0/0 | 0/0/0 | 30,892/2,194 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fleishaker_1999_reference](drugs/drug_tirilazad/Tirilazad_Fleishaker1999_reference.md) | — | 1-compartment (no model) | 0 | Fleishaker JC et al., Population pharmacokinetics of tirilaza…, Pharmaceutical research (1999) | [10.1023/a:1018835516040](https://doi.org/10.1023/a:1018835516040) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fleishaker_1999.pdf` | Fleishaker JC et al., Population pharmacokinetics of tirilaza…, Pharmaceutical research (1999) | popPK | 10 | [10.1023/a:1018835516040](https://doi.org/10.1023/a:1018835516040) | [10227715](https://pubmed.ncbi.nlm.nih.gov/10227715) | Population PK model of tirilazad with covariate effects on CL and Vc reported as percent changes, but base parameter values (typical CL, Vc) are not given numerically in the abstract. |
| `Fleishaker_1994.pdf` | Fleishaker JC et al., Lack of a pharmacokinetic/pharmacodynam…, Journal of clinical pharmac… (1994) | popPK | 8 | [10.1002/j.1552-4604.1994.tb02048.x](https://doi.org/10.1002/j.1552-4604.1994.tb02048.x) | [7962672](https://pubmed.ncbi.nlm.nih.gov/7962672) | Reports tirilazad clearance (34.9 ± 8.96 L/hr) and half-life (29 ± 7.83 hr) directly in the abstract, though no volume is given. |
| `Fleishaker_1998.pdf` | Fleishaker JC et al., Biotransformation of tirilazad in human…, The Journal of pharmacology… (1998) | pgx | 7 | not captured | [9808685](https://www.ncbi.nlm.nih.gov/pubmed/9808685) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wienkers_1996.pdf` | Wienkers LC et al., Biotransformation of tirilazad in human…, The Journal of pharmacology… (1996) | pgx | 7 | not captured | [8627581](https://www.ncbi.nlm.nih.gov/pubmed/8627581) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wienkers_1998.pdf` | Wienkers LC et al., Biotransformation of tirilazad in human…, The Journal of pharmacology… (1998) | pgx | 7 | not captured | [9808684](https://www.ncbi.nlm.nih.gov/pubmed/9808684) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T05:00:04.162107+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Fleishaker_1998 | not_relevant | 0 | 0 | Effect is from finasteride (drug-drug interaction), not a gene variant/genotype/phenotype. |
| PGx | Fleishaker_1999_2 | not_relevant | 2 | 5 | Differences in tirilazad clearance are attributed to menopausal status/hormonal state, not a gene variant/genotype/phenotype; CYP3A is only a weak correlation marker, not a pharmacogenomic effect. |
| popPK | McKenna_1995 | irrelevant | 0 | 0 | In-vitro vascular pharmacology study in rabbit aorta rings with no PK parameters for tirilazad. |
| popPK | McKenna_1996 | irrelevant | 0 | 0 | This is a vascular pharmacology study in rat aorta rings; tirilazad is only a treatment agent and no PK parameters (CL, V, half-life, model) are reported. |
| PGx | Wienkers_1996 | not_relevant | 4 | 6 | Identifies CYP3A4 as the enzyme metabolizing tirilazad with interindividual variation, but no gene variant/genotype effect on a PK/PD parameter is reported. |
| PGx | Wienkers_1998 | not_relevant | 0 | 0 | In vitro enzyme characterization of tirilazad metabolism; no gene variant/genotype effect on PK/PD parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:00 UTC</sub>
