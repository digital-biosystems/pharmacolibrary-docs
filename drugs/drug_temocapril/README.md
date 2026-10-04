<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;temocapril&quot;}]"></div>

# temocapril

- **generic name:** temocapril
- **ATC codes:** `C09AA14`
- **DrugBank:** [DB08836](https://go.drugbank.com/drugs/DB08836) · **PubChem:** [CID 443874](https://pubchem.ncbi.nlm.nih.gov/compound/443874)
- **molar mass:** 476.609 g/mol (C23H28N2O5S2) — DrugBank
- **groups:** investigational

## About

**Description.** Temocapril is a prodrug-type angiotensin-I converting enzyme (ACE) inhibitor not approved for use in the United States, but is approved in Japan and South Korea. Temocapril can also be used in hemodialysis patients without risk of serious accumulation.

**Indication.** Temocapril is an ACE inhibitor primarily indicated in the treatment of hypertension and congestive heart failure, diabetic nephropathy, and improvement of prognosis for coronary artery diseases (including acute myocardial infarction).

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| temocapril (temocapril and temocaprilat) | parent | 476.609 | C23H28N2O5S2 | DrugBank | [443874](https://pubchem.ncbi.nlm.nih.gov/compound/443874) | Luo_2024 |
| benazeprilat | metabolite | 396.443 | C22H24N2O5 | PubChem | [5463984](https://pubchem.ncbi.nlm.nih.gov/compound/5463984) | Luo_2024 |
| cilazaprilat | metabolite | 389.452 | C20H27N3O5 | PubChem | [64766](https://pubchem.ncbi.nlm.nih.gov/compound/64766) | Luo_2024 |
| enalaprilat | metabolite | 348.399 | C18H24N2O5 | PubChem | [5462501](https://pubchem.ncbi.nlm.nih.gov/compound/5462501) | Luo_2024 |
| oseltamivir carboxylate | metabolite | 284.356 | C14H24N2O4 | PubChem | [449381](https://pubchem.ncbi.nlm.nih.gov/compound/449381) | Luo_2024 |
| perindoprilat | metabolite | 340.42 | C17H28N2O5 | PubChem | [72022](https://pubchem.ncbi.nlm.nih.gov/compound/72022) | Luo_2024 |
| temocaprilat | metabolite | 448.552 | C21H24N2O5S2 | PubChem | [443151](https://pubchem.ncbi.nlm.nih.gov/compound/443151) | Luo_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 23:53 | 3:00 | 0/1/0 | 1/0/0 | 0/0/1 | 55,857/16,621 | ollama / glm-5.3-flash | 10 | 9/1 | 1/9 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Luo_2024_reference](drugs/drug_temocapril/Temocapril_Luo2024_reference.md) | — | general linear (no model) | 2 | Luo X et al., Simultaneously Predicting the Pharmacok…, Pharmaceutics (2024) | [10.3390/pharmaceutics16020234](https://doi.org/10.3390/pharmaceutics16020234) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yamamoto_2012_MMP_2](drugs/drug_temocapril/pd_Yamamoto_2012_MMP_2.md) | MMP-2 activity in peritoneal effluent ← temocaprilat · inhibition effect | — | Yamamoto D et al., Matrix metalloproteinase-2 inhibition b…, Clinical and experimental p… (2012) | [10.1111/j.1440-1681.2012.12003.x](https://doi.org/10.1111/j.1440-1681.2012.12003.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yamamoto_2012_unknown](drugs/drug_temocapril/pd_Yamamoto_2012_unknown.md) | peritoneal solute transport rate ← temocaprilat · inhibition effect | — | Yamamoto D et al., Matrix metalloproteinase-2 inhibition b…, Clinical and experimental p… (2012) | [10.1111/j.1440-1681.2012.12003.x](https://doi.org/10.1111/j.1440-1681.2012.12003.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SLCO1B1 (OATP1B1)** | `Q88` · AUC | transport | [Maeda_2006](drugs/drug_temocapril/pgx_Maeda_2006_SLCO1B1_OATP1B1_Q88.md) | Maeda K et al., Effects of organic anion transporting p…, Clinical pharmacology and t… (2006) | [10.1016/j.clpt.2006.01.011](https://doi.org/10.1016/j.clpt.2006.01.011) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=temocapril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `SLCO1A2` unknown | DrugBank actor |
| absorption | small intestine | `SLC15A1` unknown, `SLCO1A2` unknown | DrugBank actor |
| excretion | kidney | <sub>“…and kidneys…”</sub> | prose |
| excretion | liver | <sub>“…eliminated primarily through the liver…”</sub> | prose |

<sub>Actors without a tissue in the table: ACE (inhibitor), SLCO1B1 (OATP1B1) (transport).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 43 returned
- **screened:** 11  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ishizuka_1999.pdf` | Ishizuka H et al., Species differences in the transport ac…, The Journal of pharmacology… (1999) | popPK | 6 | not captured | [10454510](https://pubmed.ncbi.nlm.nih.gov/10454510) | Reports numeric in vivo biliary canalicular transport clearances for temocaprilat (temocapril's active metabolite) across species, though it is a transport/in vitro mechanistic study rather than a full population-PK model. |
| `Akazawa_2018.pdf` | Akazawa T et al., Application of Intestinal Epithelial Ce…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.118.083246](https://doi.org/10.1124/dmd.118.083246) | [30135242](https://www.ncbi.nlm.nih.gov/pubmed/30135242) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-30T23:53:06.912080+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akazawa_2018 | irrelevant | 0 | 0 | no_text gate: only 176 chars of text extracted (&lt; 400) |
| PGx | Akazawa_2018 | not_relevant | 0 | 0 | Paper concerns iPSC-derived intestinal cells for prodrug hydrolysis; no gene variant effect on temocapril PK/PD reported. |
| popPK | Arakawa_2001 | irrelevant | 4 | 2 | A PK study of temocapril (via temocaprilat) in humans, but the evidence only reports AUC qualitatively with no numeric CL/V/ka or model parameters provided. |
| popPK | Furuta_1993 | relevant | 5 | 2 | Original PK study of temocapril in liver dysfunction, but the evidence gives only abstract-level qualitative comparisons (half-life, AUC, Cmax) without numeric parameter values, which likely reside in figures/tables not provided. |
| popPK | Hirosawa_2023 | irrelevant | 2 | 1 | Temocapril is only an in-vitro hydrolase substrate with an IC50 mentioned; no PK disposition parameters for temocapril are reported. |
| PD | Hirosawa_2023 | not_relevant | 1 | 1 | Temocapril appears only as an in vitro CES1 substrate with an IC50 (&gt;100 nM) for orlistat inhibition; no exposure- or dose-response relationship or PD parameters for temocapril itself are reported. |
| popPK | Horita_2006 | irrelevant | 0 | 0 | Clinical outcomes study of aldosterone breakthrough with temocapril dosing; no PK parameters (CL, V, ka, half-life, or population-PK model) are reported. |
| popPK | Ishikawa_1997 | irrelevant | 0 | 0 | This is a nephrotoxicity interaction study in rats with no PK disposition parameters (CL, V, half-life, or PK model) for temocapril reported. |
| popPK | Ishizuka_1997 | relevant | 4 | 5 | Animal PK study of temocaprilat with biliary clearance values present (5.00 vs 0.25 ml/min/kg), but it is a transport-mechanism study, not a population-PK disposition model. |
| popPK | Ishizuka_1998 | irrelevant | 3 | 4 | This is an in-vitro hepatic uptake/transporter study reporting Km/Vmax for temocaprilat uptake, not disposition PK parameters (CL, V, half-life) or a population-PK model. |
| popPK | Kanno_2005 | irrelevant | 1 | 0 | This is a clinical outcomes study using temocapril as treatment; no PK disposition parameters (CL, V, ka, half-life, or population-PK model) for temocapril are reported. |
| popPK | Luo_2024 | relevant | 6 | 2 | Temocapril is one of the modeled CES1 prodrugs in a PBPK study, but no numeric PK parameter values for temocapril appear in the evidence; they presumably reside in supplementary material or figures not provided. |
| popPK | Nakashima_1992 | relevant | 6 | 3 | PK study of temocapril in renal insufficiency, but only urinary recovery percentages and qualitative AUC/t1/2 statements appear; core numeric parameters (Cmax, AUC, t1/2 values) are not present in the evidence. |
| popPK | Ninomiya_2005 | irrelevant | 1 | 1 | Temocapril( at) is only mentioned as a comparator substrate; no PK parameters for it are reported, and the study is an in-vitro Mrp2 transport analysis. |
| popPK | Nozawa_2006 | irrelevant | 3 | 1 | This is a chronopharmacodynamics/mortality study; PK of temocaprilat is mentioned but no numeric disposition parameters appear in the evidence. |
| popPK | Nozawa_2011 | irrelevant | 3 | 2 | This is an in situ rat intestinal absorption/perfusion study with no population-PK disposition parameters (CL, V, ka) reported, and no numeric parameter values appear in the evidence. |
| popPK | Oguchi_1993 | relevant | 6 | 3 | Original PK study of temocapril in renal impairment, but evidence contains only AUC/Cmax fold-changes, not core disposition parameters (CL, V, t½), which may be in tables/figures not provided. |
| popPK | Püchler_1998 | relevant | 8 | 2 | A dedicated temocapril/temocaprilat PK study in humans, but the evidence contains no numeric parameter values (only qualitative statements), so the numbers are not extractable here. |
| popPK | Sasaki_2004 | irrelevant | 3 | 1 | In-vitro mechanistic transport study using temocaprilat, not a PK disposition study of temocapril, and no numeric parameter values are present in the evidence. |
| popPK | Shionoiri_1993 | irrelevant | 2 | 0 | This is a review abstract on ACE inhibitor interactions mentioning temocapril only qualitatively, with no numeric PK parameters present. |
| PD | Shionoiri_1993 | not_relevant | 1 | 0 | Narrative review of ACE inhibitor PK interactions; temocapril mentioned only qualitatively with no numeric PD or exposure-response data. |
| popPK | Shionoiri_1997 | irrelevant | 1 | 0 | This is a review of fosinopril; temocapril is only mentioned as a comparator with no quantitative PK parameters for temocapril. |
| popPK | Shioya_1989 | irrelevant | 2 | 0 | This is a bioanalytical GC-MS assay development paper for temocapril (CS-622) and its metabolite; it reports only detection limits and validation metrics, with no PK disposition parameters (CL, V, t½, model) and no numeric PK values present. |
| popPK | Shou_1997 | irrelevant | 0 | 0 | This is a pharmacology/renal function study in rats; temocapril is a treatment agent and no PK parameters (CL, V, ka, half-life, or population-PK model) are reported. |
| popPK | Sierakowski_1997 | relevant | 8 | 2 | A PK study of temocapril/temocapril diacid in renal impairment, but the evidence is only an abstract with no numeric disposition parameter values (t1/2, AUC, CLCR means are described qualitatively). |
| popPK | Song_2002 | irrelevant | 3 | 0 | This is a narrative review of ACE inhibitors including temocapril, but no numeric PK parameter values for temocapril appear in the evidence. |
| PD | Song_2002 | not_relevant | 2 | 1 | Review article with only qualitative statements about ACE inhibitor dose-response curves; no numeric PD parameters for temocapril are reported or derivable. |
| popPK | Suzuki_1993 | relevant | 5 | 2 | Human PK study of temocapril as subject drug, but evidence only reports urinary/fecal excretion fractions, not CL/V/compartment parameters, and no numeric disposition values are provided. |
| popPK | Takikawa_2001 | irrelevant | 3 | 1 | Mechanistic biliary excretion study in injured rats with no numeric PK parameters (CL, V, half-life) reported in the evidence. |
| popPK | Yasunari_2004 | irrelevant | 2 | 0 | A narrative review with no numeric PK parameters for temocapril; only qualitative statements about biliary excretion. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-30 23:50 UTC</sub>
