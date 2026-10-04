<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;hydrocortisone&quot;}]"></div>

# hydrocortisone

- **generic name:** hydrocortisone
- **ATC codes:** `A01AC03`, `A07EA02`, `C05AA01`, `D07AA02`, `D07BA04`, `D07CA01`, `D07XA01`, `H02AB09`, `S01BA02`, `S01BB01`, `S01CA03`, `S01CB03`, `S02BA01`, `S02CA03`, `S03CA04`
- **DrugBank:** [DB00741](https://go.drugbank.com/drugs/DB00741) · **PubChem:** [CID 5754](https://pubchem.ncbi.nlm.nih.gov/compound/5754)
- **molar mass:** 362.4599 g/mol (C21H30O5) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

**Description.** Hydrocortisone, or cortisol, is a glucocorticoid secreted by the adrenal cortex.[A188387] Hydrocortisone is used to treat immune, inflammatory, and neoplastic conditions.[L10529,L10532,L10535,L10538,L7772,L7321] It was discovered in the 1930s by Edward Kendall and named Compound F, or 17-hydroxycorticosterone.[A188420]

Hydrocortisone was granted FDA approval on 5 August 1952.[L10574]

**Indication.** Otic solutions are indicated for infections of the external auditory canal caused by susceptible organisms and with inflammation.[L10529,L10532] Hydrocortisone tablets are indicated for certain endocrine, rheumatic, collagen, allergic, ophthalmic, respiratory, hematologic, neoplastic, edematous, gastrointestinal, and other conditions.[L10535] A hydrocortisone enema is indicated for ulcerative colitis,[L10538] a topical ointment with antibiotics is indicated for corticosteroid responsive dermatoses with infections,[L7772] and a topical cream with [acyclovir] is indicated to treat cold sores.[L7321] Oral granules of hydrocortisone are used as a replacement therapy for Adrenocortical Insufficiency (AI) in children under 17 years of age.[L16533]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hydrocortisone (cortisol) | parent | 362.46 | C21H30O5 | DrugBank | [5754](https://pubchem.ncbi.nlm.nih.gov/compound/5754) | Hamitouche_2017, Werumeus_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 01:30 | 6:33 | 1/0/1 | 0/0/1 | 0/0/0 | 46,366/25,184 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Werumeus_2017_reference](drugs/drug_hydrocortisone/Hydrocortisone_Werumeus2017_reference.md) | model (no simulator) | 1-compartment, oral | 3 | Werumeus Buning J et al., Pharmacokinetics of oral hydrocortisone…, Metabolism: clinical and ex… (2017) | [10.1016/j.metabol.2017.02.005](https://doi.org/10.1016/j.metabol.2017.02.005) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Hamitouche_2017_reference](drugs/drug_hydrocortisone/Hydrocortisone_Hamitouche2017_reference.md) | — | 1-compartment (no model) | 2 | Hamitouche N et al., Population Pharmacokinetic-Pharmacodyna…, The AAPS journal (2017) | [10.1208/s12248-016-0041-9](https://doi.org/10.1208/s12248-016-0041-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hamitouche_2017_Na_K](drugs/drug_hydrocortisone/pd_Hamitouche_2017_Na_K.md) | urinary sodium/potassium ratio ← hydrocortisone · indirect response — drug inhibits the production of urinary sodium/potassium ratio | model (no simulator) | Hamitouche N et al., Population Pharmacokinetic-Pharmacodyna…, The AAPS journal (2017) | [10.1208/s12248-016-0041-9](https://doi.org/10.1208/s12248-016-0041-9) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hydrocortisone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | skin | <sub>“…Topical hydrocortisone cream is 4-19% bioavailable…”</sub> | prose |
| absorption | small intestine | `ABCB1` inducer/substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` inducer, `CYP2B6` inducer, `CYP2C19` inducer, `CYP2C8` inducer, `CYP2C9` inducer, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | lung | `CYP1B1` inducer | DrugBank actor |
| metabolism | skin | `CYP1B1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |
| — | adrenal gland | `CYP11B1` substrate | DrugBank actor |
| — | prostate gland | `SRD5A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: AKR1D1 (substrate), ANXA1 (target), CYP11B2 (substrate), HSD11B1 (substrate), HSD11B2 (substrate), NR3C1 (target), SERPINA6 (binder), SHBG (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 102 matched, 19 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hamitouche_2017.pdf` | Hamitouche N et al., Population Pharmacokinetic-Pharmacodyna…, The AAPS journal (2017) | popPK | 10 | [10.1208/s12248-016-0041-9](https://doi.org/10.1208/s12248-016-0041-9) | [28083797](https://pubmed.ncbi.nlm.nih.gov/28083797) | The study reports quantitative population PK parameters (clearance, half-life) for intravenous hydrocortisone in healthy human volunteers. |
| `Rozenveld_2022.pdf` | Rozenveld E et al., Pharmacokinetic Modeling of Hydrocortis…, Pharmaceutics (2022) | popPK | 9 | [10.3390/pharmaceutics14061161](https://doi.org/10.3390/pharmaceutics14061161) | [35745734](https://pubmed.ncbi.nlm.nih.gov/35745734) | The paper describes a population PK model for hydrocortisone in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only correlation coefficients and study design details. |

<sub>queue written 2026-10-04T01:24:35.306538+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Czock_2005 | irrelevant | 2 | 0 | This is a review article that discusses glucocorticoid pharmacokinetics generally and presents simulations for methylprednisolone, but it does not report original quantitative PK parameter values for hydrocortisone. |
| popPK | Rozenveld_2022 | relevant | 9 | 2 | The paper describes a population PK model for hydrocortisone in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only correlation coefficients and study design details. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 01:24 UTC</sub>
