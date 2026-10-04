<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;torasemide&quot;}]"></div>

# torasemide

- **generic name:** torasemide
- **ATC codes:** `C03CA04`
- **DrugBank:** [DB00214](https://go.drugbank.com/drugs/DB00214) · **PubChem:** [CID 41781](https://pubchem.ncbi.nlm.nih.gov/compound/41781)
- **molar mass:** 348.42 g/mol (C16H20N4O3S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Torasemide is a high-ceiling loop diuretic.[A174463] Structurally, it is a pyridine-sulfonylurea used as an antihypertensive agent.[A319] Torasemide was first approved for clinical use by the FDA in 1993.[L5257]

**Indication.** Torasemide is indicated for the treatment of edema associated with congestive heart failure, renal or hepatic diseases. From this condition, it has been observed that torasemide is very effective in cases of kidney failure.[FDA label]

As well, torasemide is approved to be used as an antihypertensive agent either alone or in combination with other antihypertensives.[FDA label]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| torasemide | parent | 348.42 | C16H20N4O3S | DrugBank | [41781](https://pubchem.ncbi.nlm.nih.gov/compound/41781) | Pelligand_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 08:18 | 2:11 | 0/0/1 | 0/0/0 | 0/0/1 | 22,699/7,595 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Pelligand_2020_reference](drugs/drug_torasemide/Torasemide_Pelligand2020_reference.md) | — | 1-compartment (no model) | 1 | Pelligand L et al., Population Pharmacokinetics and Pharmac…, Frontiers in veterinary sci… (2020) | [10.3389/fvets.2020.00151](https://doi.org/10.3389/fvets.2020.00151) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **UMOD** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [McCallum_2024](drugs/drug_torasemide/pgx_McCallum_2024_UMOD_Q100.md) | McCallum L et al., UMOD Genotype-Blinded Trial of Ambulato…, Hypertension (Dallas, Tex.… (2024) | [10.1161/HYPERTENSIONAHA.124.23122](https://doi.org/10.1161/HYPERTENSIONAHA.124.23122) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=torasemide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Torasemide is the diuretic with the highest oral bioavailability…”</sub> | prose |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | kidney | <sub>“…recovered in the urine…”</sub> | prose |
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` inhibitor/substrate, `SLCO1B1` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…excreted in the feces…”</sub> | prose |
| excretion | kidney | <sub>“…about 20-30% of the administered dose is found in the urine…”</sub> | prose |
| excretion | liver | <sub>“…mainly hepatically processed…”</sub> | prose |

<sub>Actors without a tissue in the table: SLC12A1 (inhibitor), SLC12A2 (inhibitor), UMOD (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hampel_2021.pdf` | Hampel P et al., The search for brain-permeant NKCC1 inh…, Epilepsy & behavior : E&B 1… (2021) | popPK | 8 | [10.1016/j.yebeh.2020.107616](https://doi.org/10.1016/j.yebeh.2020.107616) | [33279441](https://pubmed.ncbi.nlm.nih.gov/33279441) | The paper is a PK/PD study in mice reporting brain distribution kinetics for torasemide, but specific quantitative parameter values (CL, V, ka) are not explicitly listed in the provided abstract text. |
| `Paulin_2016.pdf` | Paulin A et al., A pharmacokinetic/pharmacodynamic model…, Journal of veterinary pharm… (2016) | popPK | 8 | [10.1111/jvp.12316](https://doi.org/10.1111/jvp.12316) | [27230410](https://pubmed.ncbi.nlm.nih.gov/27230410) | The study is a PK/PD modeling study for torasemide in dogs, but the evidence only reports PD parameters (Imax, TERU50) and lacks specific numeric PK values like clearance or volume. |
| `Barbanoj_2009.pdf` | Barbanoj MJ et al., A bioavailability/bioequivalence and ph…, Clinical and experimental p… (2009) | pd | 5 | [10.1111/j.1440-1681.2008.05089.x](https://doi.org/10.1111/j.1440-1681.2008.05089.x) | [19673928](https://www.ncbi.nlm.nih.gov/pubmed/19673928) | metadata signals extractable PD data (sigmoid) |
| `Werner_2008.pdf` | Werner D et al., Determinants of steady-state torasemide…, Clinical pharmacokinetics (2008) | pgx | 8 | [10.2165/00003088-200847050-00003](https://doi.org/10.2165/00003088-200847050-00003) | [18399713](https://www.ncbi.nlm.nih.gov/pubmed/18399713) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Bae_2004.pdf` | Bae SK et al., Effects of cysteine on the pharmacokine…, Journal of pharmaceutical s… (2004) | pgx | 7 | [10.1002/jps.20151](https://doi.org/10.1002/jps.20151) | [15295798](https://www.ncbi.nlm.nih.gov/pubmed/15295798) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Nadin_1999.pdf` | Nadin L et al., Participation of CYP2C8 in retinoic aci…, Biochemical pharmacology (1999) | pgx | 7 | [10.1016/s0006-2952(99)00192-6](https://doi.org/10.1016/s0006-2952(99)00192-6) | [10484078](https://www.ncbi.nlm.nih.gov/pubmed/10484078) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Bhasker_1997.pdf` | Bhasker CR et al., Allelic and functional variability of c…, Pharmacogenetics (1997) | pgx | 5 | [10.1097/00008571-199702000-00007](https://doi.org/10.1097/00008571-199702000-00007) | [9110362](https://www.ncbi.nlm.nih.gov/pubmed/9110362) | metadata signals extractable PGX data (CYP2C9) |
| `Li_2020.pdf` | Li Y et al., Quality of oral anticoagulation control…, Current medical research an… (2020) | pgx | 5 | [10.1080/03007995.2020.1796611](https://doi.org/10.1080/03007995.2020.1796611) | [32677855](https://www.ncbi.nlm.nih.gov/pubmed/32677855) | metadata signals extractable PGX data (CYP2C9*3) |
| `Yasar_1999.pdf` | Yasar U et al., Validation of methods for CYP2C9 genoty…, Biochemical and biophysical… (1999) | pgx | 5 | [10.1006/bbrc.1998.9992](https://doi.org/10.1006/bbrc.1998.9992) | [9920790](https://www.ncbi.nlm.nih.gov/pubmed/9920790) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-09-30T08:16:06.803744+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bae_2004 | not_relevant | 0 | 0 | The study investigates the effect of protein-calorie malnutrition and cysteine supplementation on torasemide PK in rats, not the effect of a specific gene variant or genotype. |
| popPK | Barbanoj_2009 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| PD | Barbanoj_2009 | not_relevant | 0 | 0 | The paper is a bioavailability/bioequivalence and pharmacokinetic study that does not report pharmacodynamic or exposure-response data. |
| PGx | Bhasker_1997 | not_relevant | 2 | 0 | The paper explicitly states there was no apparent correlation between CYP2C9 genotype and the hydroxylation of torasemide, and no PK/PD parameters for torasemide were quantified. |
| popPK | Hampel_2021 | relevant | 8 | 2 | The paper is a PK/PD study in mice reporting brain distribution kinetics for torasemide, but specific quantitative parameter values (CL, V, ka) are not explicitly listed in the provided abstract text. |
| popPK | Kipnowski_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion transport in frog skin, not a pharmacokinetic study, and reports no disposition parameters for torasemide. |
| PD | Kipnowski_1986 | not_relevant | 0 | 0 | The paper explicitly states that torasemide did not affect sodium transport, so no dose-response or concentration-effect relationship is reported for this drug. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper studies warfarin pharmacogenomics (CYP2C9/VKORC1) and mentions torasemide only as a concomitant medication associated with poor anticoagulation control, not as the primary drug for which a pharmacogenomic effect is reported. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic risk factors for methotrexate toxicity, and while torasemide is mentioned as a co-medication associated with increased toxicity risk, the study does not report any pharmacokinetic or pharmacodynamic parameters of torasemide itself. |
| popPK | Löffler-Walz_1998 | irrelevant | 0 | 0 | The study is a mechanistic investigation of torasemide's interaction with K(ATP) channels in rat aorta, reporting pharmacodynamic IC50/EC50 values rather than pharmacokinetic disposition parameters. |
| PGx | Nadin_1999 | not_relevant | 0 | 0 | The paper investigates the metabolism of retinoic acid by CYP2C8 and mentions torasemide only as a negative control inhibitor for CYP2C9, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Paulin_2016 | relevant | 8 | 2 | The study is a PK/PD modeling study for torasemide in dogs, but the evidence only reports PD parameters (Imax, TERU50) and lacks specific numeric PK values like clearance or volume. |
| PGx | Pavlova_2020 | not_relevant | 5 | 2 | The paper is a review that mentions the role of genetic liver metabolism polymorphism in torasemide efficacy/safety but does not report specific quantitative PK/PD parameter changes or fitted effect sizes. |
| popPK | Rolin_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacological activity of a different compound (BM-591) and mentions torasemide only as a chemical reference, providing no PK parameters for torasemide. |
| PD | Rolin_2004 | not_relevant | 0 | 0 | The paper evaluates the pharmacological properties of BM-591 enantiomers, not torasemide; torasemide is only mentioned as a chemical reference and its diuretic activity is noted to be lost in the analogs, with no PD parameters reported for torasemide itself. |
| PGx | Yasar_1999 | not_relevant | 0 | 0 | The paper reports allele frequencies and genotyping method validation in a healthy population, but does not measure or report any pharmacokinetic or pharmacodynamic parameters for torasemide. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The paper is a review of CYP2C9 enzyme properties and mentions torasemide as a substrate, but it does not report specific pharmacogenomic data linking gene variants to PK/PD parameters for torasemide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 10:23 UTC</sub>
