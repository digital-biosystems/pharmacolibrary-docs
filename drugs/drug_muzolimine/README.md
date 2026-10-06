<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;muzolimine&quot;}]"></div>

# muzolimine

- **generic name:** muzolimine
- **ATC codes:** `C03CD01`
- **DrugBank:** [DB13801](https://go.drugbank.com/drugs/DB13801) · **PubChem:** not captured
- **molar mass:** 272.13 g/mol (C11H11Cl2N3O) — DrugBank
- **groups:** approved, withdrawn

## About

Muzolimine is a loop-type (high-ceiling) diuretic that was used to treat fluid retention and high blood pressure. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3868794](https://www.wikidata.org/wiki/Q3868794) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| muzolimine | parent | 272.13 | C11H11Cl2N3O | DrugBank | — | Brørs_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:30 | 2:07 | 0/1/0 | 0/0/0 | 0/0/0 | 18,773/4,989 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Brørs_1979_reference](drugs/drug_muzolimine/Muzolimine_Brrs1979_reference.md) | — | 1-compartment (no model) | 2 | Brørs O et al., Pharmacokinetics of a single oral dose…, European journal of clinica… (1979) | [10.1007/BF00609872](https://doi.org/10.1007/BF00609872) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brørs_1979.pdf` | Brørs O et al., Pharmacokinetics of a single oral dose…, European journal of clinica… (1979) | popPK | 10 | [10.1007/BF00609872](https://doi.org/10.1007/BF00609872) | [436918](https://pubmed.ncbi.nlm.nih.gov/436918) | The study reports quantitative pharmacokinetic parameters (half-lives, renal clearance) for muzolimine in humans, with specific numeric values provided in the text. |
| `Ritter_1985.pdf` | Ritter W et al., Pharmacokinetics of muzolimine after or…, Zeitschrift fur Kardiologie… (1985) | popPK | 10 | not captured | [4002791](https://pubmed.ncbi.nlm.nih.gov/4002791) | The study reports quantitative PK parameters for muzolimine in humans, but the specific numeric values are not present in the provided evidence text. |
| `Geck_1986.pdf` | Geck P et al., Inhibition of ion transport in Ehrlich…, Naunyn-Schmiedeberg's archi… (1986) | pd | 5 | [10.1007/BF00512948](https://doi.org/10.1007/BF00512948) | [2429195](https://www.ncbi.nlm.nih.gov/pubmed/2429195) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T19:28:20.368727+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Morachiello_1985 | not_relevant | 2 | 1 | The paper describes a clinical comparison of diuretic effects (urine volume, Na+ excretion) at different doses but does not provide numeric concentration-effect data, PK/PD parameters (Emax, EC50), or a formal dose-response curve analysis. |
| PD | Pohlmann-Eden_1991 | not_relevant | 1 | 0 | The paper is a case series reporting adverse events (neuromyeloencephalopathy) associated with high doses of muzolimine but does not provide any quantitative pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters like Emax or EC50. |
| popPK | Ritter_1985 | relevant | 10 | 0 | The study reports quantitative PK parameters for muzolimine in humans, but the specific numeric values are not present in the provided evidence text. |
| PD | Russo_1992 | not_relevant | 1 | 0 | The text is a qualitative review of the clinical use of loop diuretics in renal failure and contains no numeric PD parameters, concentration-effect data, or dose-response analysis for muzolimine. |
| PD | Sastry_1988 | not_relevant | 0 | 0 | The paper describes spectrophotometric analytical methods for quantifying muzolimine, not pharmacodynamic or exposure-response relationships. |
| PD | Schwartz_1986 | not_relevant | 1 | 0 | The text is a general review of diuretics that mentions muzolimine's duration of action and protein binding qualitatively, but provides no numeric PD parameters, dose-response curves, or exposure-response analysis. |
| PD | Stríbrná_1988 | not_relevant | 0 | 0 | The paper focuses on circadian rhythms of electrolyte excretion in renal insufficiency and does not report a pharmacodynamic or exposure-response model with numeric PD parameters for muzolimine. |
| PD | Toutain_1986 | not_relevant | 0 | 0 | The paper reports a qualitative comparison of nephrotoxicity markers between two fixed-dose groups (gentamicin alone vs. gentamicin + muzolimine) without providing concentration-effect data, dose-response curves, or numeric PD parameters for muzolimine. |
| PD | de_1985 | not_relevant | 1 | 0 | The paper reports clinical blood pressure changes at a fixed dose but does not provide plasma concentration data or a formal exposure-response/dose-response model with numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 19:28 UTC</sub>
