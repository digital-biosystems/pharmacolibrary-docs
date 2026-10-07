<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Lopinavir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lopinavir_Calderin2026_reference&quot;,&quot;label&quot;:&quot;Calderin_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lopinavir/Lopinavir_Calderin2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lopinavir_Thoueille2023_reference&quot;,&quot;label&quot;:&quot;Thoueille_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lopinavir/Lopinavir_Thoueille2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lopinavir_Upton2025_reference&quot;,&quot;label&quot;:&quot;Upton_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lopinavir/Lopinavir_Upton2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lopinavir_Wang2014_reference&quot;,&quot;label&quot;:&quot;Wang_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lopinavir/Lopinavir_Wang2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Lopinavir

- **generic name:** Lopinavir
- **ATC codes:** `J05AR10`
- **DrugBank:** [DB01601](https://go.drugbank.com/drugs/DB01601) · **PubChem:** [CID 92727](https://pubchem.ncbi.nlm.nih.gov/compound/92727)
- **molar mass:** 628.8008 g/mol (C37H48N4O5) — DrugBank
- **groups:** approved, investigational

## About

Lopinavir is an antiviral protease inhibitor used to treat HIV infection and HIV/AIDS. It is a WHO essential medicine and is used widely, typically in combination with other antiretroviral drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422585](https://www.wikidata.org/wiki/Q422585) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lopinavir | parent | 628.801 | C37H48N4O5 | DrugBank | [92727](https://pubchem.ncbi.nlm.nih.gov/compound/92727) | Alvarez_2021, López_2011, Thoueille_2023, Urien_2011, Wang_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:55 | 14:19 | 4/2/1 | 1/0/0 | 3/0/10 | 669,405/50,475 | ollama / glm-5.3-flash | 29 | 2/25 | 29/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Calderin_2026_reference](drugs/drug_lopinavir/Lopinavir_Calderin2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Calderin JM et al., Pharmacokinetics of Dexamethasone in Tu…, Clinical infectious disease… (2026) | [10.1093/cid/ciaf642](https://doi.org/10.1093/cid/ciaf642) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thoueille_2023_reference](drugs/drug_lopinavir/Lopinavir_Thoueille2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Thoueille P et al., Population pharmacokinetic analysis of…, BMC pharmacology & toxicolo… (2023) | [10.1186/s40360-023-00687-6](https://doi.org/10.1186/s40360-023-00687-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Upton_2025_reference](drugs/drug_lopinavir/Lopinavir_Upton2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Upton CM et al., Cerebrospinal fluid penetration of cycl…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00931-25](https://doi.org/10.1128/aac.00931-25) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2014_reference](drugs/drug_lopinavir/Lopinavir_Wang2014_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Wang K et al., Integrated population pharmacokinetic/v…, Clinical pharmacokinetics (2014) | [10.1007/s40262-013-0122-1](https://doi.org/10.1007/s40262-013-0122-1) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Alvarez_2021_reference](drugs/drug_lopinavir/Lopinavir_Alvarez2021_reference.md) | — | 1-compartment (no model) | 3 | Alvarez JC et al., Population pharmacokinetics of lopinavi…, European journal of clinica… (2021) | [10.1007/s00228-020-03020-w](https://doi.org/10.1007/s00228-020-03020-w) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [López_2011_reference](drugs/drug_lopinavir/Lopinavir_Lpez2011_reference.md) | — | 1-compartment (no model) | 0 | López Aspiroz E et al., Population pharmacokinetics of lopinavi…, Therapeutic drug monitoring (2011) | [10.1097/FTD.0b013e31822d578b](https://doi.org/10.1097/FTD.0b013e31822d578b) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Urien_2011_reference](drugs/drug_lopinavir/Lopinavir_Urien2011_reference.md) | — | 1-compartment (no model) | 4 | Urien S et al., Lopinavir/ritonavir population pharmaco…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03926.x](https://doi.org/10.1111/j.1365-2125.2011.03926.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pasquereau_2021_PFU](drugs/drug_lopinavir/pd_Pasquereau_2021_PFU.md) | HCoV-229E viral replication (plaque forming units) ← lopinavir/ritonavir · direct sigmoid Emax (Hill) effect | — | Pasquereau S et al., Resveratrol Inhibits HCoV-229E and SARS…, Viruses (2021) | [10.3390/v13020354](https://doi.org/10.3390/v13020354) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **G6PD** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_G6PD_safety.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **IRF6** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_IRF6_safety.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **ITPA** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_ITPA_safety.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCB1** | `Q40` · Fab | transport | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_ABCB1_Q40.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCC2** | `Q27` · CL/F | transport | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_ABCC2_Q27.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2C8** | `Q27` · CL/F | metabolism | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_CYP2C8_Q27.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_CYP2D6_Q27.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A** | `Q27` · CL/F | metabolism | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_CYP3A_Q27.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SLC28A2** | `Q27` · CL/F | transport | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_SLC28A2_Q27.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SLC28A3** | `Q27` · CL/F | transport | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_SLC28A3_Q27.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SLC29A1** | `Q27` · CL/F | transport | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_SLC29A1_Q27.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SLCO1A2** | `Q27` · CL/F | transport | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_SLCO1A2_Q27.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SLCO1B1** | `Q27` · CL/F | transport | [Takahashi_2020](drugs/drug_lopinavir/pgx_Takahashi_2020_SLCO1B1_Q27.md) | Takahashi T et al., Pharmacogenomics of COVID-19 therapies, NPJ genomic medicine (2020) | [10.1038/s41525-020-00143-y](https://doi.org/10.1038/s41525-020-00143-y) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lopinavir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/transport, `SLCO1A2` transport | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/transport, `SLC28A2` transport | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/transport | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/transport | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/transport, `SLC28A2` transport, `SLCO1A2` transport | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/transport | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate, `SLC29A1` transport | DrugBank actor |
| distribution | liver | `SLC29A1` transport | paper PGx gene |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` metabolism, `CYP2C9` inducer/inhibitor, `CYP2D6` metabolism/substrate, `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor/transport, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` transport | paper PGx gene |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` transport | DrugBank actor |
| excretion | small intestine | `ABCC2` transport | paper PGx gene |

<sub>Actors without a tissue in the table: CYP3A (metabolism), G6PD (safety_allele), IRF6 (safety_allele), ITPA (safety_allele), SLC28A3 (transport).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 997 matched, 95 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 7  ·  extracted 4  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_20 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `López_2011.pdf` | López Aspiroz E et al., Population pharmacokinetics of lopinavi…, Therapeutic drug monitoring (2011) | popPK | 10 | [10.1097/FTD.0b013e31822d578b](https://doi.org/10.1097/FTD.0b013e31822d578b) | [21912331](https://pubmed.ncbi.nlm.nih.gov/21912331) | Population PK model for lopinavir with CL/F formula and covariates given directly in the abstract; V and other parameters may be in full text but CL is present. |
| `Urien_2011.pdf` | Urien S et al., Lopinavir/ritonavir population pharmaco…, British journal of clinical… (2011) | popPK | 10 | [10.1111/j.1365-2125.2011.03926.x](https://doi.org/10.1111/j.1365-2125.2011.03926.x) | [21564164](https://pubmed.ncbi.nlm.nih.gov/21564164) | Population PK model of lopinavir in neonates/infants with numeric CL/F (5.87 L/h/70kg) and V/F (91.7 L/70kg) reported directly in the abstract. |
| `Wang_2014.pdf` | Wang K et al., Integrated population pharmacokinetic/v…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-013-0122-1](https://doi.org/10.1007/s40262-013-0122-1) | [24311282](https://pubmed.ncbi.nlm.nih.gov/24311282) | Population PK model of lopinavir with numeric CL and V values reported directly in the abstract. |
| `Liu_2013.pdf` | Liu Z et al., Crystallographic study of multi-drug re…, Biochemical and biophysical… (2013) | pd | 4 | [10.1016/j.bbrc.2013.06.027](https://doi.org/10.1016/j.bbrc.2013.06.027) | [23792096](https://www.ncbi.nlm.nih.gov/pubmed/23792096) | metadata signals extractable PD data (IC50) |
| `Van_2018.pdf` | Van den Hof M et al., CNS penetration of ART in HIV-infected…, The Journal of antimicrobia… (2018) | pd | 4 | [10.1093/jac/dkx396](https://doi.org/10.1093/jac/dkx396) | [29126299](https://www.ncbi.nlm.nih.gov/pubmed/29126299) | metadata signals extractable PD data (IC50) |
| `Aspiroz_2014.pdf` | Aspiroz EL et al., Toxicogenetics of lopinavir/ritonavir i…, Personalized medicine (2014) | pgx | 8 | [10.2217/pme.14.7](https://doi.org/10.2217/pme.14.7) | [29764065](https://www.ncbi.nlm.nih.gov/pubmed/29764065) | metadata signals extractable PGX data (ABCC2, PK/PD-context) |
| `Dragović_2020.pdf` | Dragović G et al., Influence of SLCO1B1 polymorphisms on l…, British journal of clinical… (2020) | pgx | 8 | [10.1111/bcp.14230](https://doi.org/10.1111/bcp.14230) | [32022294](https://www.ncbi.nlm.nih.gov/pubmed/32022294) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Green_2017.pdf` | Green B et al., Evaluation of Concomitant Antiretrovira…, Clinical pharmacokinetics (2017) | pgx | 8 | [10.1007/s40262-016-0454-8](https://doi.org/10.1007/s40262-016-0454-8) | [27665573](https://www.ncbi.nlm.nih.gov/pubmed/27665573) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Lubomirov_2010.pdf` | Lubomirov R et al., ADME pharmacogenetics: investigation of…, Pharmacogenetics and genomi… (2010) | pgx | 8 | [10.1097/FPC.0b013e328336eee4](https://doi.org/10.1097/FPC.0b013e328336eee4) | [20139798](https://www.ncbi.nlm.nih.gov/pubmed/20139798) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Mpeta_2016.pdf` | Mpeta B et al., Differences in genetic variants in lopi…, Pharmacogenomics (2016) | pgx | 8 | [10.2217/pgs.16.14](https://doi.org/10.2217/pgs.16.14) | [27142945](https://www.ncbi.nlm.nih.gov/pubmed/27142945) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Olagunju_2014.pdf` | Olagunju A et al., CYP3A4*22 (c.522-191 C&gt;T; rs35599367) i…, Pharmacogenetics and genomi… (2014) | pgx | 8 | [10.1097/FPC.0000000000000073](https://doi.org/10.1097/FPC.0000000000000073) | [24950369](https://www.ncbi.nlm.nih.gov/pubmed/24950369) | metadata signals extractable PGX data (CYP3A4*22, PK/PD-context) |
| `Rungtivasuwan_2017.pdf` | Rungtivasuwan K et al., Pharmacogenetics-based population pharm…, Pharmacogenomics (2017) | pgx | 8 | [10.2217/pgs-2017-0128](https://doi.org/10.2217/pgs-2017-0128) | [29061086](https://www.ncbi.nlm.nih.gov/pubmed/29061086) | metadata signals extractable PGX data (ABCC2, PK/PD-context) |
| `Schipani_2012.pdf` | Schipani A et al., Estimation of the effect of SLCO1B1 pol…, Antiviral therapy (2012) | pgx | 8 | [10.3851/IMP2095](https://doi.org/10.3851/IMP2095) | [22477766](https://www.ncbi.nlm.nih.gov/pubmed/22477766) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Suchy_2011.pdf` | Suchy D et al., Ezetimibe--a new approach in hyperchole…, Pharmacological reports : PR (2011) | pgx | 8 | [10.1016/s1734-1140(11)70698-3](https://doi.org/10.1016/s1734-1140(11)70698-3) | [22358082](https://www.ncbi.nlm.nih.gov/pubmed/22358082) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Tran_2021.pdf` | Tran L et al., S-warfarin limited sampling strategy wi…, European journal of clinica… (2021) | pgx | 8 | [10.1007/s00228-021-03123-y](https://doi.org/10.1007/s00228-021-03123-y) | [33754183](https://www.ncbi.nlm.nih.gov/pubmed/33754183) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Arazo_2013.pdf` | Arazo Garcés P et al., [Pharmacokinetic interactions], Enfermedades infecciosas y… (2013) | pgx | 7 | [10.1016/S0213-005X(13)70138-1](https://doi.org/10.1016/S0213-005X(13)70138-1) | [24252529](https://www.ncbi.nlm.nih.gov/pubmed/24252529) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Ford_2008.pdf` | Ford SL et al., Pharmacokinetic interaction between fos…, Antimicrobial agents and ch… (2008) | pgx | 7 | [10.1128/AAC.00724-07](https://doi.org/10.1128/AAC.00724-07) | [18056271](https://www.ncbi.nlm.nih.gov/pubmed/18056271) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Li_2012.pdf` | Li F et al., CYP3A4-mediated lopinavir bioactivation…, Drug metabolism and disposi… (2012) | pgx | 7 | [10.1124/dmd.111.041400](https://doi.org/10.1124/dmd.111.041400) | [21953914](https://www.ncbi.nlm.nih.gov/pubmed/21953914) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Pal_2006.pdf` | Pal D et al., MDR- and CYP3A4-mediated drug-herbal in…, Life sciences (2006) | pgx | 7 | [10.1016/j.lfs.2005.12.010](https://doi.org/10.1016/j.lfs.2005.12.010) | [16442130](https://www.ncbi.nlm.nih.gov/pubmed/16442130) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `van_2014.pdf` | van Heeswijk RP et al., Bedaquiline: a review of human pharmaco…, The Journal of antimicrobia… (2014) | pgx | 7 | [10.1093/jac/dku171](https://doi.org/10.1093/jac/dku171) | [24860154](https://www.ncbi.nlm.nih.gov/pubmed/24860154) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T16:41:49.790467+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agarwal_2021 | not_relevant | 0 | 0 | Review of drug-drug interactions with cardiac medications; no gene variant/genotype effects on lopinavir PK/PD reported. |
| PGx | Arab-Alameddine_2014 | not_relevant | 0 | 0 | Lopinavir appears only as a covariate affecting darunavir clearance; no gene variant effect on lopinavir PK/PD is reported. |
| PGx | Arazo_2013 | not_relevant | 0 | 0 | Text discusses drug-drug interactions with rilpivirine, no gene variant effects on lopinavir PK/PD. |
| PGx | Aspiroz_2014 | not_relevant | 3 | 2 | Abstract reports genetic associations with toxicity markers (lipids, bilirubin, diarrhea), not with LPV PK/PD parameters. |
| popPK | Boffito_2008 | irrelevant | 1 | 0 | Lopinavir is only a comparator arm; no lopinavir PK parameters are reported. |
| PGx | Boyd_2015 | not_relevant | 0 | 0 | Paper reports HIV resistance mutations and virological outcomes, not host gene variants affecting lopinavir PK/PD parameters. |
| PGx | Brill_2017 | not_relevant | 0 | 0 | Reports drug-drug interactions (LPV/r, nevirapine) on bedaquiline PK, not a pharmacogenomic variant effect on lopinavir PK/PD. |
| popPK | Calderin_2026 | irrelevant | 0 | 0 | This is a population-PK study of dexamethasone; lopinavir/ritonavir appears only as a covariate/DDI co-administration, with no lopinavir PK parameters reported. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper describes an automatic population-PK model-building tool tested on other drugs (daunorubicin, tobramycin, moxonidine, warfarin, etc.); lopinavir is never mentioned and no lopinavir parameters appear. |
| PGx | Corbett_2002 | not_relevant | 0 | 0 | Review of lopinavir/ritonavir pharmacology with no gene variant/genotype effects on PK or PD parameters reported. |
| PGx | Court_2016 | not_relevant | 0 | 0 | No gene variant/genotype effect on lopinavir PK/PD is reported; resistance mutations are viral, not host pharmacogenomics. |
| popPK | Cui_2026 | irrelevant | 0 | 0 | Synthetic biology paper using lopinavir only as a protease inhibitor input; no PK parameters for lopinavir reported. |
| popPK | Custodio_2016 | irrelevant | 1 | 0 | This is a population PK model of elvitegravir, with lopinavir only mentioned as a co-administered agent affecting EVG clearance; no lopinavir PK parameters are reported. |
| PGx | Dando_2004 | not_relevant | 0 | 0 | No pharmacogenomic effects on lopinavir PK/PD parameters are reported; text covers emtricitabine/tenofovir efficacy and safety only. |
| PGx | Duangchaemkarn_2013 | not_relevant | 0 | 0 | PK modeling paper with no genetic variant/genotype effects on lopinavir parameters. |
| popPK | Dunn_2007 | irrelevant | 0 | 0 | In-vitro antiparasitic efficacy study with EC50/MIC values, no PK disposition parameters for lopinavir. |
| PGx | Ford_2008 | not_relevant | 0 | 0 | Reports a drug-drug interaction (ritonavir/rifabutin effects on amprenavir), not a pharmacogenomic variant effect on lopinavir PK/PD. |
| PGx | Francis_2020 | not_relevant | 0 | 0 | Effects are drug-drug interactions (lopinavir-ritonavir on lumefantrine PK), not gene variant/genotype/phenotype effects; no pharmacogenomic covariates reported. |
| PGx | Francis_2021 | not_relevant | 0 | 0 | The paper reports drug–drug interactions (efavirenz, lopinavir/ritonavir, nelfinavir) and body weight effects on medroxyprogesterone acetate PK, but no gene variant/genotype/phenotype effects on lopinavir PK/PD. |
| PGx | Fricke-Galindo_2021 | not_relevant | 4 | 2 | Narrative review only lists candidate genes for lopinavir without reporting any specific genotype effect on a PK/PD parameter. |
| popPK | García_2008 | irrelevant | 0 | 0 | This is a review of darunavir resistance; lopinavir appears only as a comparator arm, with no PK parameters reported. |
| PGx | Green_2017 | not_relevant | 0 | 0 | The pharmacogenomic effect (CYP2C9/CYP2C19 phenotype on CL/F) concerns etravirine, not lopinavir; lopinavir appears only as a concomitant drug covariate. |
| popPK | Hattori_2020 | irrelevant | 0 | 0 | In-vitro antiviral study of SARS-CoV-2 protease inhibitors; lopinavir is only a comparator with EC50 values, no PK parameters. |
| popPK | Joshi_2021 | irrelevant | 0 | 0 | This is a review of favipiravir for COVID-19; lopinavir appears only as a comparator with no PK parameters for lopinavir itself. |
| PGx | Kay_2023 | not_relevant | 2 | 5 | Genotype effects (pfcrt K76T) concern lumefantrine PD, not lopinavir; lopinavir-ritonavir appears only as a drug-drug interaction on lumefantrine PK, not a pharmacogenomic effect on lopinavir. |
| popPK | King_2004 | irrelevant | 2 | 1 | This is a narrative review of ritonavir-boosted PI therapy; no original population-PK parameters (CL, V, ka) for lopinavir are reported, only AUC/EC50 comparisons. |
| PGx | Kiser_2008 | not_relevant | 3 | 2 | The paper reports a drug-drug interaction (lopinavir/ritonavir on tenofovir renal clearance), not a pharmacogenomic effect of a gene variant on lopinavir PK/PD. |
| PGx | Kosloski_2020 | not_relevant | 0 | 0 | Reports drug-drug interactions with lopinavir, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Li_2012 | not_relevant | 0 | 0 | In vitro metabolism/drug–drug interaction study; no gene variant/genotype effect on LPV PK/PD reported. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study reports PK parameters for nirmatrelvir/ritonavir, not lopinavir; lopinavir is never the subject drug. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | This is a population-PK study protocol for olanzapine in anorexia nervosa; lopinavir appears only as an excluded co-medication, and the numeric parameters (Ka, CL/F, V/F) belong to olanzapine, not lopinavir. |
| PGx | Liedtke_2009 | not_relevant | 2 | 3 | Reports drug-drug interactions between warfarin and antiretrovirals (including lopinavir/ritonavir) affecting INR, but no gene variant/genotype effect on lopinavir PK/PD parameters. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | This is a population-PK repository for escitalopram, not lopinavir; no lopinavir parameters are reported. |
| PGx | Matyanga_2020 | not_relevant | 0 | 0 | No gene variant/genotype effect on lopinavir PK/PD is reported; only a herbal-drug interaction statement without pharmacogenomic data. |
| popPK | Olagunju_2014 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PGx | Pal_2006 | not_relevant | 2 | 1 | Reports herbal (St. John's wort) drug interactions with lopinavir, not a gene variant/genotype effect on PK/PD parameters. |
| popPK | Pasquereau_2021 | irrelevant | 0 | 0 | In vitro antiviral drug screening study; lopinavir is only a comparator with EC50/CC50 values, no PK disposition parameters. |
| popPK | Qazi_2002 | irrelevant | 2 | 0 | Narrative review-style discussion of LPV/r with no numeric PK parameters reported. |
| popPK | Raugi_2016 | irrelevant | 0 | 0 | This is an in-vitro virology study of HIV-2 protease inhibitor susceptibility (EC50), with no pharmacokinetic parameters for lopinavir. |
| PGx | Rungtivasuwan_2017 | not_relevant | 0 | 0 | The paper reports lopinavir/ritonavir as a covariate altering tenofovir CL/F, not a gene variant affecting lopinavir's own PK/PD parameters. |
| PGx | Saeheng_2020 | not_relevant | 2 | 3 | CYP3A4 polymorphism effects are on quinine PK (AUCR 0.43–0.44), with lopinavir/ritonavir only as a perpetrator, not as the drug whose PK/PD is altered by genotype. |
| popPK | Salinger_2019 | irrelevant | 0 | 0 | This is a population-PK study of pretomanid; lopinavir appears only as a co-administered CYP3A4-affecting antiretroviral, with no lopinavir disposition parameters reported. |
| PGx | Salinger_2019 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on lopinavir PK/PD are reported; lopinavir/ritonavir appears only as a covariate affecting pretomanid exposure. |
| PGx | Suchy_2011 | not_relevant | 0 | 0 | Review of ezetimibe; only mentions no interaction with lopinavir, no gene variant effect on lopinavir PK/PD. |
| PGx | Tran_2021 | not_relevant | 2 | 5 | The drug of interest is lopinavir, but the paper reports CYP2C9*3 effects on S-warfarin clearance; lopinavir/ritonavir appears only as an inducer affecting warfarin PK, not as a drug whose PK/PD is changed by a gene variant. |
| popPK | Tsirizani_2025 | irrelevant | 1 | 0 | The population PK model and all parameter estimates (CL, V, Q, ka, bioavailability) are for ritonavir; lopinavir appears only as a co-administered booster/comparator with a relative bioavailability effect on ritonavir, not as the subject drug. |
| popPK | Uprety_2015 | irrelevant | 0 | 0 | This is a virological reservoir decay study in infants on lopinavir-based cART; no PK parameters for lopinavir are reported. |
| popPK | Upton_2025 | irrelevant | 0 | 0 | This is a population-PK study of cycloserine/terizidone and clofazimine; lopinavir is only mentioned as a co-administered antiretroviral, with no lopinavir PK parameters reported. |
| popPK | Willis_2020 | irrelevant | 1 | 0 | Narrative review of COVID-19 therapeutics; lopinavir is only discussed as a treatment with clinical outcomes, no PK parameters (CL, V, half-life) reported. |
| PGx | Ye_2021 | not_relevant | 0 | 0 | The study reports a herb-drug interaction (XYPI) affecting lopinavir/ritonavir PK, not a gene variant/genotype/phenotype effect. |
| PGx | van_2014 | not_relevant | 0 | 0 | Paper reviews bedaquiline PK/DDI; lopinavir appears only as a perpetrator in drug-drug interaction, with no pharmacogenomic effect on lopinavir PK/PD. |
| popPK | van_2026 | irrelevant | 1 | 0 | This is a population-PK study of atazanavir (and ritonavir) in African children; lopinavir is only mentioned as a comparator drug, with no lopinavir PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:41 UTC</sub>
