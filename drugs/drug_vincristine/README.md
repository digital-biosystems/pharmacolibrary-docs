<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vincristine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vincristine_Centanni2024_reference&quot;,&quot;label&quot;:&quot;Centanni_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vincristine/Vincristine_Centanni2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# vincristine

- **generic name:** vincristine
- **ATC codes:** `L01CA02`
- **DrugBank:** [DB00541](https://go.drugbank.com/drugs/DB00541) · **PubChem:** [CID 5978](https://pubchem.ncbi.nlm.nih.gov/compound/5978)
- **molar mass:** 824.972 g/mol (C46H56N4O10) — DrugBank
- **groups:** approved, investigational

## About

Vincristine is a Vinca alkaloid chemotherapy used to treat several cancers, including leukemia, lymphoma, neuroblastoma, and sarcomas such as Ewing sarcoma and rhabdomyosarcoma. It is an approved medicine and is included on the WHO list of essential medicines, so it is widely used in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408977](https://www.wikidata.org/wiki/Q408977) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vincristine | parent | 824.972 | C46H56N4O10 | DrugBank | [5978](https://pubchem.ncbi.nlm.nih.gov/compound/5978) | Centanni_2024, Owellen_1977, van_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:09 | 13:59 | 1/2/2 | 2/1/1 | 1/0/11 | 218,530/49,922 | openai / gpt-6-luna | 12 | 3/10 | 9/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Centanni_2024_reference](drugs/drug_vincristine/Vincristine_Centanni2024_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Centanni M et al., Model-Informed Precision Dosing to Redu…, Clinical pharmacokinetics (2024) | [10.1007/s40262-023-01336-1](https://doi.org/10.1007/s40262-023-01336-1) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Owellen_1977_reference](drugs/drug_vincristine/Vincristine_Owellen1977_reference.md) | — | 2-compartment (no model) | 6 | Owellen RJ et al., Pharmacokinetics of vindesine and vincr…, Cancer research (1977) | — |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [van_2022_reference](drugs/drug_vincristine/Vincristine_van2022_reference.md) | — | 1-compartment (no model) | 3 | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Igarashi_2021_mean](drugs/drug_vincristine/Vincristine_Igarashi2021_mean.md) | — | 1-compartment (no model) | 1 | Igarashi T et al., Population pharmacokinetic model develo…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-020-04220-y](https://doi.org/10.1007/s00280-020-04220-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Igarashi_2021_standard_error_of_the_mean](drugs/drug_vincristine/Vincristine_Igarashi2021_standard_error_of_the_mean.md) | — | 1-compartment (no model) | 0 | Igarashi T et al., Population pharmacokinetic model develo…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-020-04220-y](https://doi.org/10.1007/s00280-020-04220-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rosson_2002_DNA_synthesis](drugs/drug_vincristine/pd_Rosson_2002_DNA_synthesis.md) | DNA synthesis ← vincristine · inhibition effect | — | Rosson GB et al., Drug resistance in malignant rhabdoid t…, Cancer chemotherapy and pha… (2002) | [10.1007/s00280-001-0398-y](https://doi.org/10.1007/s00280-001-0398-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yuan_2025_VIPN](drugs/drug_vincristine/pd_Yuan_2025_VIPN.md) | vincristine-induced peripheral neuropathy ← vincristine · stimulation effect | — | Yuan Y et al., Pharmacokinetic, Pharmacodynamic and Ph…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3462](https://doi.org/10.1002/cpt.3462) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Centanni_2024_VIPN](drugs/drug_vincristine/pd_Centanni_2024_VIPN.md) | vincristine-induced peripheral neuropathy ← vincristine · categorical (graded) response model | — | Centanni M et al., Model-Informed Precision Dosing to Redu…, Clinical pharmacokinetics (2024) | [10.1007/s40262-023-01336-1](https://doi.org/10.1007/s40262-023-01336-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Olszewska-Słonina_2004_apoptosis](drugs/drug_vincristine/pd_Olszewska_S_onina_2004_apoptosis.md) | apoptosis ← vincristin · stimulation effect | — | Olszewska-Słonina D et al., B16 and CLS91 mouse melanoma cells susc…, Acta poloniae pharmaceutica (2004) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **MTNR1B** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [van_2022](drugs/drug_vincristine/pgx_van_2022_MTNR1B_safety.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CEP72** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Christofyllakis_2024](drugs/drug_vincristine/pgx_Christofyllakis_2024_CEP72_Q100.md) | Christofyllakis K et al., An inherited genetic variant of the CEP…, Annals of hematology (2024) | [10.1007/s00277-024-05973-9](https://doi.org/10.1007/s00277-024-05973-9) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | **SARM1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Yeung_2025](drugs/drug_vincristine/pgx_Yeung_2025_SARM1_Q100.md) | Yeung J et al., Vincristine-induced brain toxicity is r…, Acta neuropathologica commu… (2025) | [10.1186/s40478-025-02171-0](https://doi.org/10.1186/s40478-025-02171-0) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CEP72** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_CEP72_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ETAA1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_ETAA1_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **FGD4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_FGD4_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **FIG4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_FIG4_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **GARS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_GARS_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **NDRG1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_NDRG1_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **RAB7A** | `Q21` · AUC ratio | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_RAB7A_Q21.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SEPTIN9** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_SEPTIN9_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SNU13** | `Q21` · AUC ratio | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_SNU13_Q21.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vincristine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor/substrate | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` inhibitor/substrate, `ABCC3` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor/substrate, `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC10 (inhibitor), ABCC10 (substrate), CEP72 (unknown), ETAA1 (unknown), FGD4 (unknown), FIG4 (unknown), GARS (unknown), MTNR1B (safety_allele), NDRG1 (unknown), RAB7A (unknown), RALBP1 (substrate), SARM1 (target), SEPTIN9 (unknown), SNU13 (unknown), TUBA4A (inhibitor), TUBB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 584 matched, 73 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 5  ·  extracted 1  ·  needs_review 2  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barnett_2022.pdf` | Barnett S et al., Vincristine dosing, drug exposure and t…, European journal of cancer… (2022) | popPK | 10 | [10.1016/j.ejca.2021.09.014](https://doi.org/10.1016/j.ejca.2021.09.014) | [34657763](https://pubmed.ncbi.nlm.nih.gov/34657763) | A two-compartment population model is reported, but numeric disposition parameter estimates are absent from the provided evidence. |
| `Owellen_1977.pdf` | Owellen RJ et al., Pharmacokinetics of vindesine and vincr…, Cancer research (1977) | popPK | 10 | not captured | [872088](https://pubmed.ncbi.nlm.nih.gov/872088) | Human vincristine half-lives and distribution volumes are reported numerically in the evidence. |
| `Yuan_2025.pdf` | Yuan Y et al., Pharmacokinetic, Pharmacodynamic and Ph…, Clinical pharmacology and t… (2025) | popPK | 10 | [10.1002/cpt.3462](https://doi.org/10.1002/cpt.3462) | [39367622](https://pubmed.ncbi.nlm.nih.gov/39367622) | Human VCR PopPK is reported, but numeric disposition parameter estimates are not present in the provided evidence. |

<sub>queue written 2026-10-06T14:56:26.177993+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barnett_2022 | relevant | 10 | 2 | A two-compartment population model is reported, but numeric disposition parameter estimates are absent from the provided evidence. |
| PGx | Beraldo-Neto_2024 | not_relevant | 0 | 0 | The study describes proteomic differences associated with cellular multidrug resistance but does not report a gene variant, genotype, or phenotype effect on a vincristine PK or PD parameter. |
| PGx | Błauż_2017 | not_relevant | 0 | 0 | The paper describes drug-selected cell lines and transporter expression, but does not report a gene-related effect on a vincristine PK or PD parameter. |
| popPK | Casanova_2023 | irrelevant | 0 | 0 | Vincristine is co-administered, but PK is evaluated only for regorafenib and irinotecan. |
| PGx | Centanni_2024 | not_relevant | 0 | 0 | CYP3A5 genotype was mentioned only in simulation population assumptions; no genotype effect on vincristine PK or PD parameters was estimated or reported. |
| PGx | Centanni_2024_2 | not_relevant | 2 | 0 | The text compares exposure-prediction approaches but gives no vincristine-specific genotype effect on a PK/PD parameter or fitted effect size. |
| PGx | Centanni_2026 | not_relevant | 2 | 1 | Genotype distributions are mentioned as part of model extrapolation, but no variant-specific effect on a vincristine PK or PD parameter is reported. |
| PGx | Cheon_2017 | not_relevant | 0 | 0 | The study examines P-gp inhibition and vincristine sensitivity in resistant cells, not effects of a gene variant, genotype, or phenotype on a vincristine PK/PD parameter. |
| PGx | Chieli_2009 | not_relevant | 0 | 0 | The study examines plant compounds inhibiting P-glycoprotein in vincristine-resistant cells, not how a gene variant, genotype, or phenotype changes a vincristine PK/PD parameter. |
| popPK | Chopra_2016 | irrelevant | 0 | 0 | Vincristine is only an in-vitro comparator, and no vincristine pharmacokinetic parameters are reported. |
| PD | Chopra_2016 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of AK301 and compares it to vincristine using fixed concentrations (e.g., 500 nM) without reporting a dose-response curve or numeric PD parameters for vincristine. |
| popPK | Clarion_2012 | irrelevant | 0 | 0 | Vincristine is only a comparator in cell-line assays, with no pharmacokinetic parameters reported. |
| PD | Clarion_2012 | not_relevant | 0 | 0 | The paper focuses on the synthesis and in vitro screening of new oxaphosphinane compounds, mentioning vincristine only as a qualitative comparator for toxicity and potency without providing any exposure-response or dose-response data for vincristine. |
| PGx | Dennison_2006 | not_relevant | 1 | 0 | The study compares vincristine metabolism by CYP3A4 and CYP3A5 in vitro but does not measure a variant, genotype, or phenotype effect on vincristine PK or PD. |
| PGx | Deshpande_2016 | not_relevant | 0 | 0 | The study evaluates ABCB1 genotype effects on acepromazine sedation, not vincristine pharmacokinetics or pharmacodynamics. |
| PGx | Fleming_2026 | not_relevant | 2 | 10 | Tumor ABCB1 upregulation is linked to vincristine resistance, but the paper does not report a gene variant/genotype/phenotype effect on a vincristine PK or PD parameter. |
| PGx | Gutierrez-Camino_2018 | not_relevant | 2 | 8 | Reports associations between miRNA SNPs and vincristine-induced neurotoxicity, but does not measure or quantify a vincristine pharmacokinetic or pharmacodynamic parameter. |
| PGx | Harker_1985 | not_relevant | 0 | 0 | Reports acquired multidrug resistance and vincristine cross-resistance in selected cell lines, not a gene variant/genotype/phenotype effect on a vincristine PK or PD parameter. |
| PGx | Hofman_2021 | not_relevant | 0 | 0 | CYP3A4 or CYP3A5 overexpression did not affect vincristine activity, and the study reports no genotype-associated PK or PD parameter. |
| popPK | Igarashi_2021 | relevant | 9 | 2 | Population-PK variability estimates are present, but numeric typical CL, V, or Q values are not shown. |
| PD | Igarashi_2021 | not_relevant | 0 | 0 | The text only reports pharmacokinetic (PK) variability parameters (IIV, residual error) for a population PK model and contains no pharmacodynamic (PD) or exposure-response data. |
| PGx | Kellie_1988 | not_relevant | 0 | 0 | The paper reports treatment outcomes and toxicity but no gene variant/genotype/phenotype effect on vincristine PK or PD. |
| popPK | Knoerl_2025 | irrelevant | 0 | 0 | This human CIPN and genotype study reports no vincristine pharmacokinetic disposition parameters. |
| PGx | Kurian_2020 | not_relevant | 0 | 0 | The study examines hCAR activation and cyclophosphamide metabolism, not a genetic effect on vincristine PK or PD. |
| PGx | Kwan_2024 | not_relevant | 0 | 0 | No gene-related effect on a vincristine pharmacokinetic or pharmacodynamic parameter is reported; the metabolism findings concern 6MP. |
| PGx | Lee_1989 | not_relevant | 0 | 0 | The study reports no gene variant, genotype, or phenotype effect on a vincristine PK or PD parameter; it only notes no cross-resistance to vincristine. |
| popPK | Levêque_1996 | irrelevant | 0 | 0 | The paper reports vinorelbine pharmacokinetics, not quantitative disposition parameters for vincristine. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | Vincristine is only co-administered in R-CHOP; no vincristine pharmacokinetic parameters are reported. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for rituximab, not vincristine. |
| PGx | Mao_2024 | not_relevant | 1 | 0 | Tumor DME expression is associated with predicted vincristine sensitivity, but no gene variant/genotype/phenotype effect on a vincristine PK or PD parameter is reported. |
| PGx | Marques_2021 | not_relevant | 0 | 0 | The study examines quercetin’s effects on ABCB1 expression and efflux, not how a gene variant, genotype, or phenotype changes a vincristine PK/PD parameter. |
| PGx | Mealey_2015 | not_relevant | 0 | 0 | This review discusses P-glycoprotein-mediated drug interactions, not effects of a gene variant, genotype, or phenotype on vincristine PK or PD. |
| PGx | Mealey_2017 | not_relevant | 0 | 0 | The paper mentions vincristine as a canine P-glycoprotein substrate but reports no genotype-dependent effect on a vincristine PK or PD parameter. |
| popPK | Mehrdadi_2024 | irrelevant | 0 | 0 | Vincristine is only evaluated as a risk factor for taste changes; no pharmacokinetic parameters are reported. |
| PGx | Michaelis_2016 | not_relevant | 0 | 0 | The paper studies chemical modulation of ABCB1-mediated vincristine transport, not an effect of a gene variant, genotype, or phenotype on a vincristine PK or PD parameter. |
| PGx | Moore_2011 | not_relevant | 0 | 0 | The paper reports CYP3A5 genotypes but no genotype-associated change in vincristine PK or PD parameters. |
| PGx | Mortensen_2024 | not_relevant | 0 | 0 | The study examines transporter expression and pharmacological modulation, not gene variants/genotypes/phenotypes affecting a vincristine PK or PD parameter. |
| PGx | Mufti_2024 | not_relevant | 1 | 8 | Reports genetic associations with vincristine-induced neuropathy risk, not effects on a vincristine pharmacokinetic or pharmacodynamic parameter. |
| PGx | Nakayama_2024 | not_relevant | 0 | 0 | The study reports vincristine sensitivity in resistant cell lines but does not link it to a gene variant, genotype, or phenotype. |
| popPK | Olszewska-Słonina_2004 | irrelevant | 0 | 0 | In-vitro melanoma-cell apoptosis and EC50 are reported, but no vincristine disposition parameters. |
| PGx | Raynaud_1993 | not_relevant | 0 | 0 | Reports an assay and pharmacokinetics for 1069C85, with no gene-variant effect on vincristine PK or PD. |
| PGx | Rossi_2017 | not_relevant | 0 | 0 | Reports tumor cfDNA mutations and treatment response, not a pharmacogenomic effect on a vincristine PK or PD parameter. |
| popPK | Rosson_2002 | irrelevant | 0 | 0 | This is an in-vitro drug-sensitivity study and reports no vincristine pharmacokinetic parameters. |
| popPK | Roundhill_2019 | irrelevant | 0 | 0 | This is an in-vitro drug-resistance study and reports no vincristine pharmacokinetic parameters. |
| PD | Roundhill_2019 | not_relevant | 1 | 0 | The paper discusses drug resistance mechanisms in osteosarcoma cells and mentions vincristine resistance qualitatively, but it does not report any exposure-response or dose-response analysis with numeric PD parameters for vincristine. |
| PGx | Sabnis_2019 | not_relevant | 2 | 8 | The paper reports that pharmacologic ABCB1 inhibition lowers vincristine IC50 in cell lines, but does not report a gene variant/genotype/phenotype effect on a vincristine PK or PD parameter. |
| popPK | Samineni_2022 | irrelevant | 0 | 0 | The PopPK analysis is for venetoclax; vincristine is only a co-administered R-CHOP component, with no vincristine PK values reported. |
| PD | Samineni_2022 | not_relevant | 0 | 0 | The paper reports exposure-response analyses for venetoclax, not vincristine; no PD parameters for vincristine are provided. |
| PGx | Syed_2021 | not_relevant | 0 | 0 | The study evaluates pharmacological P-glycoprotein inhibition in resistant cancer cell lines, not a gene variant, genotype, or phenotype effect on vincristine PK or PD. |
| PGx | Toksvang_2022 | not_relevant | 0 | 0 | The paper discusses vincristine pulse therapy but reports no gene-variant effect on a vincristine pharmacokinetic or pharmacodynamic parameter. |
| popPK | Toso_1995 | irrelevant | 0 | 0 | This review concerns vinorelbine, not vincristine, and gives no numeric vincristine disposition parameters. |
| PGx | Tsuruo_1981 | not_relevant | 0 | 0 | Reports differences in vincristine sensitivity among tumor cell populations, not effects of a gene variant, genotype, or phenotype on a PK/PD parameter. |
| PGx | Wilde_2007 | not_relevant | 0 | 0 | No gene variant, genotype, or phenotype effect on a vincristine PK or PD parameter is reported; CYP3A4 phenotyping is only suggested for future study. |
| popPK | Yuan_2025 | relevant | 10 | 2 | Human VCR PopPK is reported, but numeric disposition parameter estimates are not present in the provided evidence. |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | Reports CYP3A-related vinblastine metabolism, not a pharmacogenomic effect on a vincristine PK or PD parameter. |
| PGx | Zhou_2018 | not_relevant | 0 | 0 | The case concerns vindesine, not vincristine; CYP3A5*3/*3 is proposed to explain vindesine accumulation, with no vincristine PK/PD effect reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 14:56 UTC</sub>
