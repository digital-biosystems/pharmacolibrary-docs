<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;mitomycin&quot;}]"></div>

# mitomycin

- **generic name:** mitomycin
- **ATC codes:** `L01DC03`
- **DrugBank:** [DB00305](https://go.drugbank.com/drugs/DB00305) · **PubChem:** [CID 5746](https://pubchem.ncbi.nlm.nih.gov/compound/5746)
- **molar mass:** 334.3272 g/mol (C15H18N4O5) — DrugBank
- **groups:** approved, investigational

## About

Mitomycin is a cytotoxic antibiotic used as an anticancer drug, for example against bladder cancer and other cancers, and also in the treatment of glaucoma. It is an approved medicine used in cancer care, though it carries a boxed warning, and it is also being studied for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19856779](https://www.wikidata.org/wiki/Q19856779) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mitomycin (mitomycin C) | parent | 334.327 | C15H18N4O5 | DrugBank | [5746](https://pubchem.ncbi.nlm.nih.gov/compound/5746) | Barbhaiya_1984, Cerretani_2002, Cerretani_2005, Dennis_1993, Erlichman_1987, Kuzuya_1994, Rump_1996, Rump_2002, Shimizu_1991, den_1983, van_1983, van_2004 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:29 | 55:26 | 0/8/4 | 7/0/0 | 0/0/7 | 1,444,769/140,046 | openai / gpt-6-luna | 57 | 7/43 | 57/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Barbhaiya_1984_reference](drugs/drug_mitomycin/Mitomycin_Barbhaiya1984_reference.md) | — | 1-compartment (no model) | 4 | Barbhaiya RH et al., Pharmacokinetics of mitomycin C in dogs…, Journal of pharmaceutical s… (1984) | [10.1002/jps.2600730909](https://doi.org/10.1002/jps.2600730909) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Cerretani_2002_reference](drugs/drug_mitomycin/Mitomycin_Cerretani2002_reference.md) | — | 1-compartment (no model) | 3 | Cerretani D et al., Pharmacokinetics of intraarterial mitom…, Vascular pharmacology (2002) | [10.1016/s1537-1891(02)00280-x](https://doi.org/10.1016/s1537-1891(02)00280-x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Cerretani_2005_reference](drugs/drug_mitomycin/Mitomycin_Cerretani2005_reference.md) | — | 1-compartment (no model) | 5 | Cerretani D et al., Pharmacokinetics of mitomycin C after r…, Journal of chemotherapy (Fl… (2005) | [10.1179/joc.2005.17.6.668](https://doi.org/10.1179/joc.2005.17.6.668) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Rump_2002_reference](drugs/drug_mitomycin/Mitomycin_Rump2002_reference.md) | — | 1-compartment (no model) | 7 | Rump AF et al., Pharmacokinetics of intra-arterial mito…, European journal of clinica… (2002) | [10.1007/s00228-002-0496-8](https://doi.org/10.1007/s00228-002-0496-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Dennis_1993_reference](drugs/drug_mitomycin/Mitomycin_Dennis1993_reference.md) | — | 1-compartment (no model) | 3 | Dennis IF et al., Pharmacokinetics of BW12C and mitomycin…, Cancer chemotherapy and pha… (1993) | [10.1007/BF00685879](https://doi.org/10.1007/BF00685879) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Erlichman_1987_reference](drugs/drug_mitomycin/Mitomycin_Erlichman1987_reference.md) | — | 1-compartment (no model) | 2 | Erlichman C et al., Mitomycin C pharmacokinetics in patient…, Canadian journal of physiol… (1987) | [10.1139/y87-068](https://doi.org/10.1139/y87-068) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kuzuya_1994_reference](drugs/drug_mitomycin/Mitomycin_Kuzuya1994_reference.md) | — | 1-compartment (no model) | 1 | Kuzuya T et al., Pharmacokinetic characteristics of 5-fl…, The Journal of pharmacy and… (1994) | [10.1111/j.2042-7158.1994.tb03883.x](https://doi.org/10.1111/j.2042-7158.1994.tb03883.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Rump_1996_reference](drugs/drug_mitomycin/Mitomycin_Rump1996_reference.md) | — | 1-compartment (no model) | 5 | Rump AF et al., Pharmacokinetics of intraarterial mitom…, General pharmacology (1996) | [10.1016/0306-3623(95)02088-8](https://doi.org/10.1016/0306-3623(95)02088-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Shimizu_1991_reference](drugs/drug_mitomycin/Mitomycin_Shimizu1991_reference.md) | — | 1-compartment (no model) | 5 | Shimizu E et al., Pharmacokinetics of bronchial artery in…, European journal of cancer… (1991) | [10.1016/0277-5379(91)90278-l](https://doi.org/10.1016/0277-5379(91)90278-l) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [den_1983_reference](drugs/drug_mitomycin/Mitomycin_den1983_reference.md) | — | 1-compartment (no model) | 1 | den Hartigh J et al., Pharmacokinetics of mitomycin C in huma…, Cancer research (1983) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [van_1983_reference](drugs/drug_mitomycin/Mitomycin_van1983_reference.md) | — | 1-compartment (no model) | 3 | van Hazel GA et al., Pharmacokinetics of mitomycin C in pati…, Cancer treatment reports (1983) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [van_2004_reference](drugs/drug_mitomycin/Mitomycin_van2004_reference.md) | — | 2-compartment (no model) | 4 | van Ruth S et al., Population pharmacokinetics and pharmac…, Clinical pharmacokinetics (2004) | [10.2165/00003088-200443020-00005](https://doi.org/10.2165/00003088-200443020-00005) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bartolome_2006_RFP](drugs/drug_mitomycin/pd_Bartolome_2006_RFP.md) | phenotypic red fluorescence ← mitomycin C · direct linear effect | — | Bartolome A et al., SOS-red fluorescent protein (RFP) bioas…, Biosensors & bioelectronics (2006) | [10.1016/j.bios.2005.10.009](https://doi.org/10.1016/j.bios.2005.10.009) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gallo_2022_BP52_viability](drugs/drug_mitomycin/pd_Gallo_2022_BP52_viability.md) | BP52 cell viability ← Mitomycin-C (MMC) · inhibition effect | — | Gallo RA et al., Effects of Mitomycin-C and 5-Fluorourac…, American journal of ophthal… (2022) | [10.1016/j.ajo.2021.12.016](https://doi.org/10.1016/j.ajo.2021.12.016) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gallo_2022_LSC_viability](drugs/drug_mitomycin/pd_Gallo_2022_LSC_viability.md) | LSC viability ← Mitomycin-C (MMC) · inhibition effect | — | Gallo RA et al., Effects of Mitomycin-C and 5-Fluorourac…, American journal of ophthal… (2022) | [10.1016/j.ajo.2021.12.016](https://doi.org/10.1016/j.ajo.2021.12.016) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ishida_1982_growth_inhibition](drugs/drug_mitomycin/pd_Ishida_1982_growth_inhibition.md) | growth inhibition ← mitomycin C · inhibition effect | — | Ishida R et al., Susceptibility of Fanconi's anemia lymp…, Cancer research (1982) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Li_2026_2_mean_absorbance_ratio](drugs/drug_mitomycin/pd_Li_2026_2_mean_absorbance_ratio.md) | mean absorbance ratio ← Mitomycin C · inhibition effect | — | Li C et al., Nonantibiotic-driven evolution reveals…, mBio (2026) | [10.1128/mbio.01168-26](https://doi.org/10.1128/mbio.01168-26) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Qanash_2026_Cytotoxicity](drugs/drug_mitomycin/pd_Qanash_2026_Cytotoxicity.md) | Cytotoxicity ← mitomycin C · direct sigmoid Emax (Hill) effect | — | Qanash H et al., Natural Bioactive Compounds from &lt;i&…, Pharmaceuticals (Basel, Swi… (2026) | [10.3390/ph19081272](https://doi.org/10.3390/ph19081272) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">other animal</span> | [Wang_2010_growth_inhibition](drugs/drug_mitomycin/pd_Wang_2010_growth_inhibition.md) | growth inhibition ← MMC · inhibition effect | — | Wang Y et al., Distinct roles of cytochrome P450 reduc…, Molecular cancer therapeuti… (2010) | [10.1158/1535-7163.MCT-09-1098](https://doi.org/10.1158/1535-7163.MCT-09-1098) |
| <span class="pk-badge pk-badge--green">extracted</span> | [van_2004_degree_of_leucopenia](drugs/drug_mitomycin/pd_van_2004_degree_of_leucopenia.md) | degree of leucopenia ← mitomycin · direct sigmoid Emax (Hill) effect | — | van Ruth S et al., Population pharmacokinetics and pharmac…, Clinical pharmacokinetics (2004) | [10.2165/00003088-200443020-00005](https://doi.org/10.2165/00003088-200443020-00005) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **BRCA1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Imyanitov_2021](drugs/drug_mitomycin/pgx_Imyanitov_2021_BRCA1_Q100.md) | Imyanitov EN, Cytotoxic and targeted therapy for BRCA…, Hereditary cancer in clinic… (2021) | [10.1186/s13053-021-00193-y](https://doi.org/10.1186/s13053-021-00193-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **BRCA2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Imyanitov_2021](drugs/drug_mitomycin/pgx_Imyanitov_2021_BRCA2_Q100.md) | Imyanitov EN, Cytotoxic and targeted therapy for BRCA…, Hereditary cancer in clinic… (2021) | [10.1186/s13053-021-00193-y](https://doi.org/10.1186/s13053-021-00193-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ADGRA2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Udagawa_2018](drugs/drug_mitomycin/pgx_Udagawa_2018_ADGRA2_Q100.md) | Udagawa C et al., Targeted sequencing reveals genetic var…, Experimental and therapeuti… (2018) | [10.3892/etm.2017.5533](https://doi.org/10.3892/etm.2017.5533) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **LIFR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Udagawa_2018](drugs/drug_mitomycin/pgx_Udagawa_2018_LIFR_Q100.md) | Udagawa C et al., Targeted sequencing reveals genetic var…, Experimental and therapeuti… (2018) | [10.3892/etm.2017.5533](https://doi.org/10.3892/etm.2017.5533) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **LRP1B** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Udagawa_2018](drugs/drug_mitomycin/pgx_Udagawa_2018_LRP1B_Q100.md) | Udagawa C et al., Targeted sequencing reveals genetic var…, Experimental and therapeuti… (2018) | [10.3892/etm.2017.5533](https://doi.org/10.3892/etm.2017.5533) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **PMS2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Udagawa_2018](drugs/drug_mitomycin/pgx_Udagawa_2018_PMS2_Q100.md) | Udagawa C et al., Targeted sequencing reveals genetic var…, Experimental and therapeuti… (2018) | [10.3892/etm.2017.5533](https://doi.org/10.3892/etm.2017.5533) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **POR** | `Q22` · CL | metabolism | [Xiao_2015](drugs/drug_mitomycin/pgx_Xiao_2015_POR_Q22.md) | Xiao X et al., Functional POR A503V is associated with…, Scientific reports (2015) | [10.1038/srep11751](https://doi.org/10.1038/srep11751) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mitomycin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `POR` metabolism/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADGRA2 (unknown), BRCA1 (target), BRCA2 (target), DNA (cross-linking/alkylation), LIFR (unknown), LRP1B (unknown), PMS2 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 878 matched, 157 returned
- **screened:** 12  ·  **relevant:** 12
- **records:** 12  ·  extracted 0  ·  needs_review 4  ·  rejected 8  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barbhaiya_1984.pdf` | Barbhaiya RH et al., Pharmacokinetics of mitomycin C in dogs…, Journal of pharmaceutical s… (1984) | popPK | 10 | [10.1002/jps.2600730909](https://doi.org/10.1002/jps.2600730909) | [6436466](https://pubmed.ncbi.nlm.nih.gov/6436466) | Dog mitomycin C pharmacokinetic parameters are reported numerically in the evidence. |
| `Cerretani_2002.pdf` | Cerretani D et al., Pharmacokinetics of intraarterial mitom…, Vascular pharmacology (2002) | popPK | 10 | [10.1016/s1537-1891(02)00280-x](https://doi.org/10.1016/s1537-1891(02)00280-x) | [12616984](https://pubmed.ncbi.nlm.nih.gov/12616984) | Human mitomycin pharmacokinetic parameters are reported numerically in the evidence. |
| `Cerretani_2005.pdf` | Cerretani D et al., Pharmacokinetics of mitomycin C after r…, Journal of chemotherapy (Fl… (2005) | popPK | 10 | [10.1179/joc.2005.17.6.668](https://doi.org/10.1179/joc.2005.17.6.668) | [16433199](https://pubmed.ncbi.nlm.nih.gov/16433199) | Human mitomycin pharmacokinetic values, including compartmental-model clearance, are reported in the evidence. |
| `Erlichman_1987.pdf` | Erlichman C et al., Mitomycin C pharmacokinetics in patient…, Canadian journal of physiol… (1987) | popPK | 10 | [10.1139/y87-068](https://doi.org/10.1139/y87-068) | [3107786](https://pubmed.ncbi.nlm.nih.gov/3107786) | Human mitomycin C pharmacokinetics are modeled with a two-compartment model and numeric half-lives are reported. |
| `Kuzuya_1994.pdf` | Kuzuya T et al., Pharmacokinetic characteristics of 5-fl…, The Journal of pharmacy and… (1994) | popPK | 10 | [10.1111/j.2042-7158.1994.tb03883.x](https://doi.org/10.1111/j.2042-7158.1994.tb03883.x) | [7815285](https://pubmed.ncbi.nlm.nih.gov/7815285) | Human intraperitoneal mitomycin C disposition parameters are reported numerically in the evidence. |
| `Rump_1996.pdf` | Rump AF et al., Pharmacokinetics of intraarterial mitom…, General pharmacology (1996) | popPK | 10 | [10.1016/0306-3623(95)02088-8](https://doi.org/10.1016/0306-3623(95)02088-8) | [8853303](https://pubmed.ncbi.nlm.nih.gov/8853303) | The study reports numeric two-compartment pharmacokinetic parameters for mitomycin C in patients. |
| `Rump_2002.pdf` | Rump AF et al., Pharmacokinetics of intra-arterial mito…, European journal of clinica… (2002) | popPK | 10 | [10.1007/s00228-002-0496-8](https://doi.org/10.1007/s00228-002-0496-8) | [12389068](https://pubmed.ncbi.nlm.nih.gov/12389068) | Human mitomycin disposition parameters are numerically reported in the evidence. |
| `Shimizu_1991.pdf` | Shimizu E et al., Pharmacokinetics of bronchial artery in…, European journal of cancer… (1991) | popPK | 10 | [10.1016/0277-5379(91)90278-l](https://doi.org/10.1016/0277-5379(91)90278-l) | [1654961](https://pubmed.ncbi.nlm.nih.gov/1654961) | Human mitomycin PK is quantified, including half-life, AUC, Cmax, and one-compartment volume. |
| `den_1983.pdf` | den Hartigh J et al., Pharmacokinetics of mitomycin C in huma…, Cancer research (1983) | popPK | 10 | not captured | [6411336](https://pubmed.ncbi.nlm.nih.gov/6411336) | Human MMC pharmacokinetic parameters, including compartmental volumes, half-life, and clearance, are numerically reported. |
| `van_1983.pdf` | van Hazel GA et al., Pharmacokinetics of mitomycin C in pati…, Cancer treatment reports (1983) | popPK | 10 | not captured | [6411337](https://pubmed.ncbi.nlm.nih.gov/6411337) | Reports numeric two-compartment pharmacokinetic parameters for mitomycin in the evidence provided. |
| `van_2004.pdf` | van Ruth S et al., Population pharmacokinetics and pharmac…, Clinical pharmacokinetics (2004) | popPK | 10 | [10.2165/00003088-200443020-00005](https://doi.org/10.2165/00003088-200443020-00005) | [14748621](https://pubmed.ncbi.nlm.nih.gov/14748621) | Human population pharmacokinetic model reports numeric mitomycin compartment volumes, transfer rate, and clearance. |
| `Dennis_1993.pdf` | Dennis IF et al., Pharmacokinetics of BW12C and mitomycin…, Cancer chemotherapy and pha… (1993) | popPK | 9 | [10.1007/BF00685879](https://doi.org/10.1007/BF00685879) | [8462126](https://pubmed.ncbi.nlm.nih.gov/8462126) | Mitomycin has a reported two-compartment model, beta half-life, and AUC with numeric values in the evidence. |
| `Hashida_1984.pdf` | Hashida M et al., Disposition and pharmacokinetics of a p…, Drug metabolism and disposi… (1984) | popPK | 9 | not captured | [6148218](https://pubmed.ncbi.nlm.nih.gov/6148218) | Rat pharmacokinetics were modeled, but no numeric parameter values are included in the evidence. |
| `Nomura_1998.pdf` | Nomura T et al., Pharmacokinetic characteristics and the…, Journal of controlled relea… (1998) | popPK | 9 | [10.1016/s0168-3659(97)00185-5](https://doi.org/10.1016/s0168-3659(97)00185-5) | [9743445](https://pubmed.ncbi.nlm.nih.gov/9743445) | Rat mitomycin conjugate disposition was modeled, but numeric parameter values are not present in the evidence. |

<sub>queue written 2026-10-06T18:57:01.504017+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ang_2015 | not_relevant | 0 | 0 | Mitomycin C is used to arrest feeder-cell growth; no genetic effects on its pharmacokinetic or pharmacodynamic parameters are reported. |
| PGx | Arva_2005 | not_relevant | 1 | 1 | The paper studies MDM2 SNP309 effects on p53 activity in cells, but does not report a mitomycin-specific pharmacokinetic or pharmacodynamic parameter. |
| PGx | Baumhäkel_2001 | not_relevant | 0 | 0 | No gene variant, genotype, or phenotype is analyzed; mitomycin is only reported as having no CYP3A4-inhibitory effect. |
| popPK | Bilal_2023 | irrelevant | 0 | 0 | The study reports cefepime pharmacokinetics, not mitomycin values. |
| PGx | Bottega_2021 | not_relevant | 2 | 8 | DDX11-mutant cells show increased chromosomal fragmentation after mitomycin C exposure, but this is a genomic-instability assay rather than a reported mitomycin PK/PD parameter. |
| popPK | Carmona_2014 | irrelevant | 0 | 0 | Mitomycin is only part of a chemotherapy regimen; the study reports no pharmacokinetic parameters. |
| PGx | Chassy_1978 | not_relevant | 0 | 0 | Mitomycin C is used to induce bacterial variants; the paper does not report a genotype-dependent PK or PD effect of mitomycin. |
| popPK | Cheung_2026 | irrelevant | 0 | 0 | This human case report concerns dextromethorphan treatment and reports no mitomycin pharmacokinetic parameters. |
| PGx | Cho_2019 | not_relevant | 0 | 0 | The study reports acquired cellular cross-resistance to mitomycin C and transporter expression changes, but no gene variant/genotype/phenotype effect on a mitomycin PK or PD parameter. |
| PGx | Deenen_2013 | not_relevant | 0 | 0 | The text mentions pharmacokinetic and pharmacogenetic analyses but reports no genotype-related effect on a mitomycin PK or PD parameter. |
| PGx | Deng_2015 | not_relevant | 0 | 0 | No pharmacokinetic or pharmacodynamic parameter of mitomycin is reported, and the tested genotypes were not associated with mitomycin outcomes. |
| PGx | Elango_2016 | not_relevant | 0 | 0 | The study examines selenium's effects on apoptosis in lymphocytes exposed to mitomycin, not how a gene variant or phenotype changes a mitomycin PK or PD parameter. |
| popPK | Etinosa_2026 | irrelevant | 0 | 0 | This is a biomaterials review and provides no quantitative mitomycin disposition parameters. |
| popPK | Fajdiga_2025 | irrelevant | 0 | 0 | This is an in-vitro lipid-emulsion cell study, not mitomycin pharmacokinetics, and reports no disposition parameters. |
| popPK | Gallo_2022 | irrelevant | 0 | 0 | This in-vitro cytotoxicity study reports no mitomycin pharmacokinetic disposition parameters. |
| PGx | Gorodnova_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes in BRCA1-variant carriers and associations with TP53 mutation type, but no genotype effect on a mitomycin pharmacokinetic or pharmacodynamic parameter. |
| popPK | Halawani_2026 | irrelevant | 0 | 0 | The paper studies AhR and axon regeneration, with no mitomycin pharmacokinetic parameters. |
| PGx | Harker_1985 | not_relevant | 0 | 0 | Reports acquired cellular cross-resistance to mitomycin C, but no gene variant, genotype, or phenotype effect on a mitomycin PK or PD parameter. |
| popPK | Hashida_1984 | relevant | 9 | 0 | Rat pharmacokinetics were modeled, but no numeric parameter values are included in the evidence. |
| popPK | He_2014 | irrelevant | 0 | 0 | This is a review of Eucommia ulmoides and reports no mitomycin pharmacokinetic parameters. |
| popPK | Higashide_2019 | irrelevant | 0 | 0 | This clinical outcomes study uses mitomycin C during surgery and reports no pharmacokinetic parameters. |
| PGx | Hsieh_2013 | not_relevant | 1 | 3 | AR overexpression altered mitomycin C-induced cell killing in vitro, but the study reports no pharmacokinetic or defined pharmacodynamic parameter linked to a gene variant/genotype/phenotype. |
| PGx | Hu_2015 | not_relevant | 0 | 0 | The study examines mitomycin C-induced UGT2B7 expression, not a gene variant or phenotype effect on mitomycin pharmacokinetics or pharmacodynamics. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The pharmacokinetic data concern A36, not mitomycin. |
| PGx | Huang_2011 | not_relevant | 0 | 0 | The paper mentions testing mitomycin sensitivity in cell lines with different ABCG2 expression, but reports no mitomycin-specific result or effect on a PK/PD parameter. |
| PGx | Hulshof_2020 | not_relevant | 0 | 0 | Reports genotype associations with recurrence and survival, not a pharmacokinetic or pharmacodynamic parameter of mitomycin. |
| popPK | Ishida_1982 | irrelevant | 0 | 0 | This is an in-vitro cell-sensitivity study, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Josifovska_2017 | not_relevant | 0 | 0 | The paper reports mitomycin C effects on cytokine secretion in cultured cells but no gene variant, genotype, or phenotype effect on a PK or PD parameter. |
| PGx | Keating_2009 | not_relevant | 0 | 0 | The text mentions mitomycin only as part of combination therapy and reports no gene-related effect on its PK or PD parameters. |
| PGx | Khafagy_2019 | not_relevant | 0 | 0 | CYP1B1 mutations were assessed as predictors of surgical outcome, not as effects on a pharmacokinetic or pharmacodynamic parameter of mitomycin-C. |
| popPK | Khurana_2012 | irrelevant | 0 | 0 | Mitomycin is only used to pretreat apoptotic cells; no mitomycin pharmacokinetic parameters are reported. |
| PGx | King_2014 | not_relevant | 0 | 0 | No genetic association was identified for mitomycin, and the study reports no mitomycin PK or PD parameter effects. |
| popPK | Lani_2026 | irrelevant | 0 | 0 | This narrative review concerns date palm and reports no mitomycin pharmacokinetic parameters. |
| popPK | Le_2025 | irrelevant | 0 | 0 | This mouse study examines PLX3397 and reports no mitomycin pharmacokinetic parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | This study investigates ENO1-targeted nanotherapy, not mitomycin pharmacokinetics, and reports no mitomycin disposition parameters. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | This in-vitro bacterial resistance study reports no quantitative mitomycin pharmacokinetic parameters. |
| popPK | Linaburg_2026 | irrelevant | 0 | 0 | Mitomycin C was used intraoperatively, but no pharmacokinetic parameters are reported. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | This is a cardiotoxicity study of doxorubicin and reports no mitomycin pharmacokinetic parameters. |
| popPK | Ludwig_2026 | irrelevant | 0 | 0 | This is a cagrilintide neuroscience study and reports no mitomycin pharmacokinetic parameters. |
| popPK | Ludwików_1993 | irrelevant | 0 | 0 | The numeric values describe erythrocyte micronucleation kinetics, not mitomycin disposition parameters. |
| PGx | Lund-Andersen_2024 | not_relevant | 0 | 0 | The study links BRAF mutations and altered tumor gene expression to possible MMC resistance but reports no pharmacogenomic effect on a mitomycin PK or PD parameter. |
| PGx | Luo_2017 | not_relevant | 0 | 0 | Mitomycin C is mentioned only as a reagent in prior phage induction studies; no pharmacogenomic effects on its PK or PD are reported. |
| PGx | Mahabir_2010 | not_relevant | 2 | 1 | The paper reports genotype-dependent gene-expression responses to mitomycin, but does not report a pharmacokinetic or pharmacodynamic parameter; the sensitivity difference is cited from prior work. |
| popPK | Mandal_2023 | irrelevant | 0 | 0 | This is a human glaucoma surgery outcomes study; mitomycin C was not used and no pharmacokinetic parameters are reported. |
| PGx | Martins_2021 | not_relevant | 0 | 0 | The paper studies induced bacterial persister-cell survival after mitomycin C exposure, not a gene variant/genotype/phenotype effect on a mitomycin PK or PD parameter. |
| PGx | McKay_1978 | not_relevant | 0 | 0 | Mitomycin C is only used to induce phage; no gene-dependent effect on its pharmacokinetic or pharmacodynamic parameters is reported. |
| popPK | Miya_1992 | relevant | 8 | 2 | Human mitomycin pharmacokinetics were studied with a two-compartment model, but numeric disposition parameter values are not provided. |
| popPK | Moura_2025 | irrelevant | 0 | 0 | Mitomycin is mentioned only as an example; the study reports cell-based anticancer activity, not mitomycin pharmacokinetics. |
| popPK | Myers_2026 | irrelevant | 0 | 0 | Mitomycin is only used in an in-vitro treatment, with no mitomycin disposition parameters reported. |
| popPK | Naeem_2026 | irrelevant | 0 | 0 | This is a review of Terminalia arjuna, with no mitomycin pharmacokinetic parameters or numeric values. |
| popPK | Nagayama_1991 | irrelevant | 0 | 0 | This is an in-vitro genotoxicity assay, not a mitomycin pharmacokinetic study. |
| PGx | Narimatsu_1983 | not_relevant | 0 | 0 | Mitomycin C is only mentioned as feeder-cell treatment; no genetic effect on its PK or PD is reported. |
| PGx | Niedernhofer_2004 | not_relevant | 0 | 0 | Ercc1/Xpf status affects cellular DNA-damage repair after mitomycin C, but the paper reports no pharmacokinetic or pharmacodynamic parameter for the drug. |
| PGx | Noack_2014 | not_relevant | 0 | 0 | The study examines mitomycin-induced P-glycoprotein trafficking in engineered cells, not how a gene variant, genotype, or phenotype changes a mitomycin PK or PD parameter. |
| popPK | Nomura_1998 | relevant | 9 | 0 | Rat mitomycin conjugate disposition was modeled, but numeric parameter values are not present in the evidence. |
| PGx | Nordgard_2008 | not_relevant | 0 | 0 | The study reports genotype associations with survival and gene expression in patients receiving 5-FU plus mitomycin, but no pharmacokinetic or pharmacodynamic parameter of mitomycin. |
| PGx | Norris_2025 | not_relevant | 0 | 0 | The DPYD genotype is associated with 5-FU toxicity, not a pharmacokinetic or pharmacodynamic parameter of mitomycin. |
| PGx | OCallaghan_2011 | not_relevant | 0 | 0 | Mitomycin C is mentioned only as a growth-arrest treatment; no genetic effect on its PK or PD is reported. |
| PGx | Ojha_2016 | not_relevant | 0 | 0 | The paper studies autophagy and gene expression in cancer cells, not how a gene variant, genotype, or phenotype changes a mitomycin PK or PD parameter. |
| popPK | Okumura_1982 | irrelevant | 3 | 0 | Mitomycin C is only a comparator, and no numeric PK parameter values are provided. |
| PGx | Omoto_2009 | not_relevant | 0 | 0 | Mitomycin C is mentioned as a cell-culture treatment, but no genetic variant or phenotype effect on its PK or PD is reported. |
| PGx | Park_2012 | not_relevant | 0 | 0 | The paper compares bacterial BMR with CPR in vitro but reports no gene variant, genotype, or phenotype effect on a mitomycin pharmacokinetic or pharmacodynamic parameter. |
| popPK | Paul-Chima_2026 | irrelevant | 0 | 0 | This systematic review reports no mitomycin pharmacokinetic disposition parameters or readable numeric values for them. |
| PGx | Perry_1993 | not_relevant | 2 | 8 | The resistant cell line shows about 2-fold MMC resistance and altered enzyme expression/activity, but no gene variant or genotype effect on a PK or PD parameter is established. |
| PGx | Perry_1993_2 | not_relevant | 0 | 0 | Reports acquired cellular resistance and an approximately twofold shift in MMC inhibitory concentration, but no gene variant, genotype, or pharmacogenomic phenotype effect. |
| popPK | Preza_2026 | irrelevant | 0 | 0 | The study examines niclosamide in mice, not mitomycin, and provides no mitomycin PK parameter values. |
| popPK | Qanash_2026 | irrelevant | 0 | 0 | Mitomycin C is only mentioned as an assay control and no pharmacokinetic parameters are reported. |
| PGx | SUBAK-SHARPE_1965 | not_relevant | 0 | 0 | The title describes biochemical variants of a hamster cell line and reports no gene-associated mitomycin PK/PD parameter. |
| PGx | Saif_2021 | not_relevant | 0 | 0 | Genetic associations concern 5-FU toxicity or response; no variant effect on a mitomycin pharmacokinetic or pharmacodynamic parameter is reported. |
| popPK | Sato_2026 | irrelevant | 0 | 0 | Mitomycin C was used as an adjunct, but the study reports no mitomycin pharmacokinetic parameters. |
| popPK | Savic_2021 | irrelevant | 0 | 0 | Mitomycin was co-administered, but the reported pharmacokinetic results are for doxorubicin and doxorubicinol. |
| PGx | Schelonka_2000 | not_relevant | 0 | 0 | NQO1*2 homozygosity is linked to reduced tissue staining, but no mitomycin pharmacokinetic or pharmacodynamic parameter is reported. |
| popPK | Schulz_2026 | irrelevant | 0 | 0 | This is an in-vitro kinase-inhibitor study with no mitomycin pharmacokinetic parameters. |
| PGx | Shabaruddin_2010 | not_relevant | 0 | 0 | Mitomycin is mentioned only as a chemotherapy regimen; no gene variant/genotype/phenotype effect on its PK or PD parameters is reported. |
| popPK | Shang_2026 | irrelevant | 0 | 0 | Mitomycin is only a comparator in a cell-proliferation assay, with no pharmacokinetic parameters reported. |
| popPK | Sládeková_2025 | irrelevant | 0 | 0 | The study evaluates FKK6 in mice and reports no mitomycin pharmacokinetic parameters. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | This is a review of gold nanoclusters and reports no quantitative mitomycin pharmacokinetic parameters. |
| popPK | Swaminathan_2020 | irrelevant | 0 | 0 | This clinical visual-field study uses mitomycin C as a surgical adjunct and reports no pharmacokinetic parameters. |
| popPK | Swaminathan_2024 | irrelevant | 0 | 0 | This is a human glaucoma surgery outcomes study; mitomycin C is an adjunct and no pharmacokinetic parameters are reported. |
| popPK | Takahashi_1985 | irrelevant | 1 | 0 | Quantitative one-compartment PK is reported for the mitomycin derivative KW-2083, not mitomycin itself. |
| PGx | Teplitsky_2023 | not_relevant | 0 | 0 | The study compares MMC and SB-431542 effects in fibroblasts but reports no gene variant, genotype, or phenotype effect on an MMC PK or PD parameter. |
| PGx | Trilla-Fuertes_2021 | not_relevant | 0 | 0 | Genetic variants are associated with response to panitumumab, not with a pharmacokinetic or pharmacodynamic parameter of mitomycin. |
| PGx | Trilla-Fuertes_2023 | not_relevant | 0 | 0 | CYP2D6 copy-number variants were associated with disease-free survival, but no mitomycin pharmacokinetic or pharmacodynamic parameter was reported. |
| PGx | Vallo_2015 | not_relevant | 0 | 1 | Mitomycin C cross-resistance is reported in cell lines, but no gene variant, genotype, or phenotype is linked to a mitomycin PK/PD parameter. |
| popPK | Verweij_1990 | irrelevant | 1 | 0 | This is a review that mentions a two-compartment model but provides no quantitative mitomycin disposition values. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | This imaging study reports no quantitative mitomycin pharmacokinetic parameters or values. |
| popPK | Wei_2026 | irrelevant | 0 | 0 | The paper studies FFAR4 and TUG891, not mitomycin pharmacokinetics. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | This is a narrative review of Acanthamoeba redox biology and reports no mitomycin pharmacokinetic parameters. |
| popPK | Woodall_2025 | irrelevant | 0 | 0 | Mitomycin C is only an in-vitro no-proliferation control, with no mitomycin pharmacokinetic parameters reported. |
| PGx | Yao_1996 | not_relevant | 1 | 0 | Reports DT-diaphorase transcript variation and induction after mitomycin treatment, but no genotype-dependent mitomycin PK or PD parameter. |
| popPK | Yuh_2026 | irrelevant | 0 | 0 | This tumor-model study reports no mitomycin pharmacokinetic parameters or numeric disposition values. |
| popPK | Zhang_2007 | irrelevant | 0 | 0 | This is an in-vitro cytotoxicity study, not a pharmacokinetic study, and reports no mitomycin disposition parameters. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | Mitomycin is not studied; the paper concerns NCA029 and reports no mitomycin disposition parameters. |
| PGx | Zhao_2016 | not_relevant | 0 | 0 | The study links EPAS-1 expression to mitomycin C resistance in cancer cells but reports no pharmacokinetic or pharmacodynamic parameter effect of a gene variant, genotype, or phenotype. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | Mitomycin C is only an intraoperative adjunct associated with analgesic demand; no mitomycin pharmacokinetic parameters are reported. |
| PGx | Zhou_2015 | not_relevant | 0 | 0 | The study examines curcumin-mediated changes in ABC transporter expression and MMC sensitivity, not effects of a gene variant, genotype, or phenotype on an MMC PK/PD parameter. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper studies vorapaxar, not mitomycin, and reports no mitomycin pharmacokinetic parameters. |
| popPK | van_2026 | irrelevant | 0 | 0 | The study models oxaliplatin in humans; mitomycin is only mentioned as a comparator, with no mitomycin PK values reported. |
| popPK | Águila_2026 | irrelevant | 0 | 0 | The paper studies miR-146a and platelet function, with no mitomycin pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 18:58 UTC</sub>
