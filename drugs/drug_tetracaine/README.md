<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;tetracaine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tetracaine_Cacek2017_reference&quot;,&quot;label&quot;:&quot;Cacek_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tetracaine/Tetracaine_Cacek2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# tetracaine

- **generic name:** tetracaine
- **ATC codes:** `C05AD02`, `D04AB06`, `N01BA03`, `S01HA03`
- **DrugBank:** [DB09085](https://go.drugbank.com/drugs/DB09085) · **PubChem:** [CID 5411](https://pubchem.ncbi.nlm.nih.gov/compound/5411)
- **molar mass:** 264.369 g/mol (C15H24N2O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

**Description.** Tetracaine is an ester local anaesthetic currently available in combination with lidocaine as a cream and patch.

**Indication.** Ophthalmic tetracaine is indicated for the for procedures requiring a rapid and short- acting topical ophthalmic anesthetic.

The combination lidocaine and tetracaine patch is indicated for local dermal analgesia for superficial dermatological procedures and superficial venous access.  The combination lidocaine and tetracaine cream is intended to provide topical local analgesia for superficial dermatological procedures.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tetracaine | parent | 264.369 | C15H24N2O2 | DrugBank | [5411](https://pubchem.ncbi.nlm.nih.gov/compound/5411) | Cacek_2017 |
| para-butylaminobenzoic acid | metabolite | 193.246 | C11H15NO2 | PubChem | [95946](https://pubchem.ncbi.nlm.nih.gov/compound/95946) | Cacek_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 19:55 | 8:07 | 0/1/0 | 0/0/1 | 0/0/0 | 74,717/11,918 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Cacek_2017_reference](drugs/drug_tetracaine/Tetracaine_Cacek2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Cacek AT et al., Population Pharmacokinetics of an Intra…, Journal of clinical pharmac… (2017) | [10.1002/jcph.799](https://doi.org/10.1002/jcph.799) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tay_2019_relative_light_units](drugs/drug_tetracaine/pd_Tay_2019_relative_light_units.md) | sodium influx fluorescence (NaV1.1) ← veratridine · direct sigmoid Emax (Hill) effect | — | Tay B et al., Development of a high-throughput fluore…, PloS one (2019) | [10.1371/journal.pone.0213751](https://doi.org/10.1371/journal.pone.0213751) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tetracaine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>“…Systemic absorption of anaesthetic from the combination cream is directly related to the d…”</sub> | prose |
| metabolism | blood | <sub>“…rapidly hydrolyzed by plasma esterases…”</sub> | prose |

<sub>Actors without a tissue in the table: RYR1 (modulator), RYR2 (modulator), SCN10A (inhibitor), SCN1A (blocker).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cacek_2017.pdf` | Cacek AT et al., Population Pharmacokinetics of an Intra…, Journal of clinical pharmac… (2017) | popPK | 9 | [10.1002/jcph.799](https://doi.org/10.1002/jcph.799) | [27436060](https://pubmed.ncbi.nlm.nih.gov/27436060) | The paper reports quantitative population PK parameters (ka, CL, V, Q) for tetracaine's primary metabolite PBBA, which serves as the measurable surrogate for tetracaine disposition in this study. |

<sub>queue written 2026-09-28T19:50:53.952240+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Csernoch_1999 | irrelevant | 0 | 0 | The study is a mechanistic investigation of tetracaine's effect on calcium release in muscle fibers, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Grant_1994 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment of tetracaine and does not report any pharmacokinetic parameters. |
| popPK | Katsuki_2004 | irrelevant | 0 | 0 | The study is an in-vitro hemolysis assay measuring EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Langerman_1994 | irrelevant | 0 | 0 | The study reports pharmacodynamic potency (EC50/ED50) and partition coefficients, not pharmacokinetic disposition parameters (CL, V, ka, etc.) for tetracaine. |
| PGx | Moore_2025 | not_relevant | 0 | 0 | The paper investigates the structure-activity relationship of tetracaine derivatives for treating CPVT and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Mourot_2006 | irrelevant | 0 | 0 | The paper is a mechanistic study on nicotinic acetylcholine receptors where tetracaine is used only as a noncompetitive blocker, with no pharmacokinetic parameters reported. |
| PD | Mourot_2006 | not_relevant | 0 | 0 | The paper focuses on the photochemical tethering of an agonist (AC5) to nAChRs; tetracaine is only mentioned as a noncompetitive blocker used to confirm the mechanism of action, with no exposure-response or dose-response analysis or numeric PD parameters reported for it. |
| popPK | Scheib_2006 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Scheib_2006 | not_relevant | 0 | 0 | The provided text only contains the chemical structure and molecular weight of Tetrodotoxin, with no mention of tetracaine or any pharmacodynamic data. |
| popPK | Schnetkamp_1990 | irrelevant | 0 | 0 | The paper is a mechanistic study on ion channel cation selectivity where tetracaine is used only as a pharmacological blocker, not as a subject drug for PK analysis. |
| PD | Schnetkamp_1990 | not_relevant | 1 | 0 | The paper mentions tetracaine only as a qualitative blocker of a channel component without providing any numeric concentration-effect data, IC50, or dose-response parameters. |
| popPK | Tay_2019 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology/fluorescence assay development study where tetracaine is used only as a positive control inhibitor, not as a subject for pharmacokinetic analysis. |
| popPK | Wang_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of tetracaine's interaction with sodium channels, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Wissing_2002 | irrelevant | 0 | 0 | The paper is a mechanistic study on calcium signaling where tetracaine is used only as a pharmacological antagonist/comparator, not as the subject of a pharmacokinetic analysis. |
| PD | Wissing_2002 | not_relevant | 0 | 0 | The paper reports that tetracaine did not affect the Ca2+ release response, providing no numeric PD parameters or exposure-response relationship for tetracaine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 19:51 UTC</sub>
