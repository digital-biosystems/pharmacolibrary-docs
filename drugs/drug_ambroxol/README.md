<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R02A&quot;,&quot;href&quot;:&quot;atc/R02A.md&quot;},{&quot;label&quot;:&quot;ambroxol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ambroxol_Vergin1985_reference&quot;,&quot;label&quot;:&quot;Vergin_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ambroxol/Ambroxol_Vergin1985_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ambroxol

- **generic name:** ambroxol
- **ATC codes:** `R02AD05`, `R03CC63`, `R05CB06`
- **DrugBank:** [DB06742](https://go.drugbank.com/drugs/DB06742) · **PubChem:** [CID 2132](https://pubchem.ncbi.nlm.nih.gov/compound/2132)
- **molar mass:** 378.108 g/mol (C13H18Br2N2O) — DrugBank
- **groups:** approved, investigational

## About

Ambroxol is a mucolytic medicine used for respiratory conditions such as chronic obstructive pulmonary disease, helping to clear mucus from the airways. It is an approved drug, widely used in cough and cold preparations and other respiratory medicines, and is also being investigated for additional uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q221637](https://www.wikidata.org/wiki/Q221637) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ambroxol | parent | 378.108 | C13H18Br2N2O | DrugBank | [2132](https://pubchem.ncbi.nlm.nih.gov/compound/2132) | Vergin_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:39 | 11:56 | 1/0/0 | 7/0/0 | 0/0/1 | 487,197/20,539 | ollama / glm-5.3-flash | 23 | 3/15 | 22/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Vergin_1985_reference](drugs/drug_ambroxol/Ambroxol_Vergin1985_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Vergin H et al., [The pharmacokinetics and bioequivalenc…, Arzneimittel-Forschung (1985) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bocci_2020_CPE](drugs/drug_ambroxol/pd_Bocci_2020_CPE.md) | SARS-CoV-2 cytopathic effect (percent protection from CPE) ← ambroxol · inhibition effect | — | Bocci G et al., Virtual and In Vitro Antiviral Screenin…, ACS pharmacology & translat… (2020) | [10.1021/acsptsci.0c00131](https://doi.org/10.1021/acsptsci.0c00131) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hefner_2025_TTX_S_Na_block](drugs/drug_ambroxol/pd_Hefner_2025_TTX_S_Na_block.md) | tonic inhibition of TTX-sensitive Na+ channels ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hefner_2025_hNav1_8_tonic_block](drugs/drug_ambroxol/pd_Hefner_2025_hNav1_8_tonic_block.md) | tonic inhibition of hNav1.8 ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hefner_2025_hTRPA1_activation](drugs/drug_ambroxol/pd_Hefner_2025_hTRPA1_activation.md) | activation of hTRPA1 ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hefner_2025_hTRPA1_current_block](drugs/drug_ambroxol/pd_Hefner_2025_hTRPA1_current_block.md) | inhibition of mustard oil- or carvacrol-induced currents on hTRPA1 ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hefner_2025_hTRPV1_activation](drugs/drug_ambroxol/pd_Hefner_2025_hTRPV1_activation.md) | activation of hTRPV1 ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hefner_2025_hTRPV1_capsaicin_current_block](drugs/drug_ambroxol/pd_Hefner_2025_hTRPV1_capsaicin_current_block.md) | inhibition of capsaicin-induced currents on hTRPV1 ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hefner_2025_rNav1_8_tonic_block](drugs/drug_ambroxol/pd_Hefner_2025_rNav1_8_tonic_block.md) | tonic inhibition of rNav1.8 ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Piatakova_2012_sGC](drugs/drug_ambroxol/pd_Piatakova_2012_sGC.md) | sodium nitroprusside-induced human platelet soluble guanylate cyclase activity ← ambroxol · inhibition effect | — | Piatakova NV et al., [Soluble guanylate cyclase in the molec…, Biomeditsinskaia khimiia (2012) | [10.18097/pbmc20125801032](https://doi.org/10.18097/pbmc20125801032) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Piatakova_2012_sGC_2](drugs/drug_ambroxol/pd_Piatakova_2012_sGC_2.md) | sodium nitroprusside-induced rat lung soluble guanylate cyclase activity ← ambroxol · inhibition effect | — | Piatakova NV et al., [Soluble guanylate cyclase in the molec…, Biomeditsinskaia khimiia (2012) | [10.18097/pbmc20125801032](https://doi.org/10.18097/pbmc20125801032) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Severina_2000_sGC](drugs/drug_ambroxol/pd_Severina_2000_sGC.md) | sodium nitroprusside-stimulated human platelet soluble guanylate cyclase activity ← ambroxol · inhibition effect | — | Severina IS et al., Ambroxol as an inhibitor of nitric oxid…, European journal of pharmac… (2000) | [10.1016/s0014-2999(00)00739-1](https://doi.org/10.1016/s0014-2999(00)00739-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Severina_2000_sGC_2](drugs/drug_ambroxol/pd_Severina_2000_sGC_2.md) | sodium nitroprusside-stimulated rat lung soluble guanylate cyclase activity ← ambroxol · inhibition effect | — | Severina IS et al., Ambroxol as an inhibitor of nitric oxid…, European journal of pharmac… (2000) | [10.1016/s0014-2999(00)00739-1](https://doi.org/10.1016/s0014-2999(00)00739-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Tripathi_2022_GCase_activity](drugs/drug_ambroxol/pd_Tripathi_2022_GCase_activity.md) | Glucocerebrosidase (rGCase) enzyme activity inhibition ← Ambroxol · inhibition effect | — | Tripathi P et al., Generation of wild-type rat Glucocerebr…, Bioorganic chemistry (2022) | [10.1016/j.bioorg.2022.105871](https://doi.org/10.1016/j.bioorg.2022.105871) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Weiser_2002_TTX_r_Na_current](drugs/drug_ambroxol/pd_Weiser_2002_TTX_r_Na_current.md) | TTX-resistant Na+ current (tonic block) ← ambroxol · inhibition effect | — | Weiser T et al., Inhibition of tetrodotoxin (TTX)-resist…, Molecular pharmacology (2002) | [10.1124/mol.62.3.433](https://doi.org/10.1124/mol.62.3.433) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Weiser_2002_TTX_r_Na_current_2](drugs/drug_ambroxol/pd_Weiser_2002_TTX_r_Na_current_2.md) | TTX-resistant Na+ current (phasic block) ← ambroxol · inhibition effect | — | Weiser T et al., Inhibition of tetrodotoxin (TTX)-resist…, Molecular pharmacology (2002) | [10.1124/mol.62.3.433](https://doi.org/10.1124/mol.62.3.433) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Weiser_2002_TTX_s_Na_current](drugs/drug_ambroxol/pd_Weiser_2002_TTX_s_Na_current.md) | TTX-sensitive Na+ current ← ambroxol · inhibition effect | — | Weiser T et al., Inhibition of tetrodotoxin (TTX)-resist…, Molecular pharmacology (2002) | [10.1124/mol.62.3.433](https://doi.org/10.1124/mol.62.3.433) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Weiser_2002_rBIIA_Na_current](drugs/drug_ambroxol/pd_Weiser_2002_rBIIA_Na_current.md) | Recombinant rat brain IIA Na+ channel current (tonic block) ← ambroxol · inhibition effect | — | Weiser T et al., Inhibition of tetrodotoxin (TTX)-resist…, Molecular pharmacology (2002) | [10.1124/mol.62.3.433](https://doi.org/10.1124/mol.62.3.433) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Weiser_2002_rBIIA_Na_current_2](drugs/drug_ambroxol/pd_Weiser_2002_rBIIA_Na_current_2.md) | Recombinant rat brain IIA Na+ channel current (phasic block) ← ambroxol · inhibition effect | — | Weiser T et al., Inhibition of tetrodotoxin (TTX)-resist…, Molecular pharmacology (2002) | [10.1124/mol.62.3.433](https://doi.org/10.1124/mol.62.3.433) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Weiser_2006_TTX_r_Na_current_block](drugs/drug_ambroxol/pd_Weiser_2006_TTX_r_Na_current_block.md) | Inhibition of resting TTX-resistant Na+ currents in rat sensory neurons ← ambroxol · direct sigmoid Emax (Hill) effect | — | Weiser T, Comparison of the effects of four Na+ c…, Neuroscience letters (2006) | [10.1016/j.neulet.2005.10.058](https://doi.org/10.1016/j.neulet.2005.10.058) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **GBA** | `Q320` · Emax | target | [Lipiński_2022](drugs/drug_ambroxol/pgx_Lipi_ski_2022_GBA_Q320.md) | Lipiński P et al., [Pharmacological chaperone therapy for…, Postepy biochemii (2022) | [10.18388/pb.2021_451](https://doi.org/10.18388/pb.2021_451) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ambroxol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GBA (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 68 matched, 63 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vergin_1985.pdf` | Vergin H et al., [The pharmacokinetics and bioequivalenc…, Arzneimittel-Forschung (1985) | popPK | 9 | not captured | [4074420](https://pubmed.ncbi.nlm.nih.gov/4074420) | Human PK study reporting numeric CL, Vd, and half-life for ambroxol directly in the abstract. |
| `Couet_1989.pdf` | Couet W et al., Steady-state bioavailability and pharma…, International journal of cl… (1989) | popPK | 8 | not captured | [2807621](https://pubmed.ncbi.nlm.nih.gov/2807621) | Human PK study of ambroxol with non-compartmental and compartmental analysis, but the numeric parameter values are not present in the provided evidence. |
| `Yang_2015.pdf` | Yang YG et al., Pharmacokinetics of ambroxol and clenbu…, International journal of cl… (2015) | popPK | 8 | not captured | [26770490](https://pubmed.ncbi.nlm.nih.gov/26770490) | Human PK study of ambroxol with two-compartment modeling, but no numeric parameter values (CL, V, t1/2) appear in the evidence text. |
| `Faroongsarng_2004.pdf` | Faroongsarng D et al., Ambroxol Lozenge Bioavailability : Part…, Clinical drug investigation (2004) | popPK | 6 | [10.2165/00044011-200424110-00007](https://doi.org/10.2165/00044011-200424110-00007) | [17523731](https://pubmed.ncbi.nlm.nih.gov/17523731) | Human PK study of ambroxol lozenge vs tablet with absorption/dissolution rate constants (0.13 h⁻¹) and mean transit time difference (7.69 h) reported, though disposition parameters like CL/V are not given. |

<sub>queue written 2026-10-07T13:32:44.661265+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Assmus_2022 | irrelevant | 0 | 0 | Ambroxol is only mentioned as one of many sourced test compounds in a COVID-19 drug-repurposing platform; no PK parameters for ambroxol are reported, and the PK modeling shown concerns molnupiravir. |
| popPK | Bocci_2020 | irrelevant | 0 | 0 | This is an in vitro antiviral drug-repurposing study; ambroxol is only a screened compound with EC50-type activity data, no PK disposition parameters for ambroxol are reported. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | This is a population PK study of nemonoxacin, not ambroxol; ambroxol is not mentioned at all. |
| popPK | Couet_1989 | relevant | 8 | 2 | Human PK study of ambroxol with non-compartmental and compartmental analysis, but the numeric parameter values are not present in the provided evidence. |
| PGx | Darling_2021 | not_relevant | 2 | 1 | Ambroxol is mentioned only as a treatment; no gene-variant effect on its PK/PD parameters is reported. |
| PGx | Dhanush_2026 | not_relevant | 3 | 2 | Mentions ambroxol effects "regardless of GBA mutation status" but reports no genotype-specific PK/PD parameter change or effect size. |
| popPK | El-Gendy_2025 | irrelevant | 0 | 0 | This is a therapeutic efficacy study of bromhexine plus tiamulin against S. aureus infection in dogs, with no PK parameters (CL, V, ka, half-life, or PK model) for ambroxol or any drug reported. |
| PGx | Higashi_2024 | not_relevant | 4 | 3 | GBA1 genotype is associated with clinical response rates to ambroxol, but no PK or PD parameter (e.g., GCase activity change, exposure) is quantitatively linked to genotype. |
| PGx | Ishiguro_2000 | not_relevant | 2 | 5 | Identifies CYP3A4 as the enzyme metabolizing ambroxol in vitro; no gene variant/genotype effect on PK/PD parameters is reported. |
| PGx | Lin_2023 | not_relevant | 0 | 0 | Paper tests ambroxol as a therapeutic in INAD models; no gene variant effect on ambroxol PK/PD parameters reported. |
| PGx | Lipiński_2026 | not_relevant | 3 | 2 | Systematic review of ambroxol in GD/GBA1-PD; discusses genotype-dependent GCase response qualitatively but reports no fitted pharmacogenomic effect on a PK/PD parameter. |
| PGx | Menozzi_2023 | not_relevant | 2 | 3 | Review of GBA1 variants and Parkinson disease pathogenesis; ambroxol discussed only as a GCase chaperone concept, with no gene-variant effects on ambroxol PK/PD parameters. |
| PGx | Metta_2025 | not_relevant | 3 | 0 | Mentions ambroxol in GBA-mutated PD conceptually but reports no PK/PD parameter changes by genotype. |
| PGx | Mohamed_2024 | not_relevant | 4 | 3 | Review discusses GBA1 genotype-dependent variability in ambroxol response qualitatively, but reports no fitted PK/PD effect sizes. |
| popPK | Nahata_1995 | irrelevant | 2 | 1 | Ambroxol is only mentioned in passing among many unrelated conference abstracts; no numeric ambroxol PK parameters are present in the evidence. |
| popPK | Pai_2026 | irrelevant | 0 | 0 | A narrative review of pediatric extemporaneous compounding with no ambroxol PK parameters or numeric disposition values. |
| popPK | Rojpibulstit_2003 | relevant | 4 | 2 | A bioavailability/PK study in humans dosing ambroxol, but only AUC/Cmax/Tmax ratios are given; CL, V, half-life or other disposition values are not shown in the evidence. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | A review of excipient safety in paediatric formulations with no ambroxol PK parameters; no quantitative disposition values present. |
| PGx | Spedding_2025 | not_relevant | 0 | 0 | Ambroxol is only mentioned as a GBA2 inhibitor in phase II for ALS; no gene variant/genotype effect on its PK or PD parameters is reported. |
| popPK | Suleymanov_2026 | irrelevant | 0 | 0 | This is a UV-Vis analytical method validation for levofloxacin in rat plasma; ambroxol is only mentioned as a co-analyte in cited TLC methods, with no PK parameters for ambroxol. |
| PGx | Tejera_2021 | not_relevant | 0 | 0 | Paper is an in silico drug repurposing study for preeclampsia; ambroxol only appears as a virtual screening hit with no gene variant effects on PK/PD parameters. |
| popPK | Yang_2015 | relevant | 8 | 2 | Human PK study of ambroxol with two-compartment modeling, but no numeric parameter values (CL, V, t1/2) appear in the evidence text. |
| PGx | Yang_2022 | not_relevant | 3 | 5 | Reports GBA1 genotype effects on GCase/tau/α-syn biomarkers and ambroxol's pharmacodynamic chaperone response in vitro, but no PK parameter or drug-level PD endpoint of ambroxol itself. |
| PGx | Zhan_2023 | not_relevant | 2 | 3 | Reports ambroxol efficacy in Gaucher disease stratified by age and severity, not by gene variant/genotype effects on ambroxol PK or PD parameters. |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | Study reports a DDI (cilostazol-ambroxol) via CYP3A4, not any gene variant/genotype/phenotype effect on ambroxol PK/PD. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | This is a population PK study of cefoperazone/sulbactam; ambroxol is only mentioned as a concomitant medication, with no ambroxol PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:32 UTC</sub>
