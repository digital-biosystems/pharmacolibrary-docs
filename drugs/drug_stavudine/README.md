<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;stavudine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Stavudine_Jullien2007_reference&quot;,&quot;label&quot;:&quot;Jullien_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Jullien2007_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Stavudine_Panhard2007_reference&quot;,&quot;label&quot;:&quot;Panhard_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Panhard2007_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Stavudine_Sinxadi2010_reference&quot;,&quot;label&quot;:&quot;Sinxadi_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Sinxadi2010_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# stavudine

- **generic name:** stavudine
- **ATC codes:** `J05AF04`, `J05AR28`
- **DrugBank:** [DB00649](https://go.drugbank.com/drugs/DB00649) · **PubChem:** [CID 18283](https://pubchem.ncbi.nlm.nih.gov/compound/18283)
- **molar mass:** 224.2133 g/mol (C10H12N2O4) — DrugBank
- **groups:** approved, investigational

## About

Stavudine is a nucleoside reverse-transcriptase inhibitor that was used to treat HIV infection and AIDS.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423984](https://www.wikidata.org/wiki/Q423984) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| stavudine | parent | 224.213 | C10H12N2O4 | DrugBank | [18283](https://pubchem.ncbi.nlm.nih.gov/compound/18283) | Horton_1995, Innes_2018, Jullien_2007, Panhard_2007, Sinxadi_2010, Tatsunami_2001 |
| stavudine triphosphate | metabolite | 464.153 | C10H15N2O13P3 | PubChem | [65355](https://pubchem.ncbi.nlm.nih.gov/compound/65355) | Innes_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:21 | 5:56 | 3/4/2 | 0/0/0 | 1/0/3 | 258,388/17,353 | ollama / glm-5.3-flash | 13 | 1/10 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Jullien_2007_reference](drugs/drug_stavudine/Stavudine_Jullien2007_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Jullien V et al., Age-related differences in the pharmaco…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02854.x](https://doi.org/10.1111/j.1365-2125.2007.02854.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Panhard_2007_reference](drugs/drug_stavudine/Stavudine_Panhard2007_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Panhard X et al., Population pharmacokinetic analysis of…, European journal of clinica… (2007) | [10.1007/s00228-007-0337-x](https://doi.org/10.1007/s00228-007-0337-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sinxadi_2010_reference](drugs/drug_stavudine/Stavudine_Sinxadi2010_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Sinxadi PZ et al., Lack of association between stavudine e…, AIDS research and therapy (2010) | [10.1186/1742-6405-7-23](https://doi.org/10.1186/1742-6405-7-23) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q63, Q30, Q64 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Innes_2018_reference](drugs/drug_stavudine/Stavudine_Innes2018_reference.md) | — | 1-compartment (no model) | 5 | Innes S et al., Can We Improve Stavudine's Safety Profi…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.00761-18](https://doi.org/10.1128/AAC.00761-18) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: not captured</sub> | [Horton_1995_reference](drugs/drug_stavudine/Stavudine_Horton1995_reference.md) | — | — (no model) | 0 | Horton CM et al., Population pharmacokinetics of stavudin…, Antimicrobial agents and ch… (1995) | [10.1128/AAC.39.10.2309](https://doi.org/10.1128/AAC.39.10.2309) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Horton_1995_null_value](drugs/drug_stavudine/Stavudine_Horton1995_null_value.md) | — | 1-compartment (no model) | 0 | Horton CM et al., Population pharmacokinetics of stavudin…, Antimicrobial agents and ch… (1995) | [10.1128/AAC.39.10.2309](https://doi.org/10.1128/AAC.39.10.2309) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Horton_1995_population_estimate](drugs/drug_stavudine/Stavudine_Horton1995_population_estimate.md) | — | 1-compartment (no model) | 7 | Horton CM et al., Population pharmacokinetics of stavudin…, Antimicrobial agents and ch… (1995) | [10.1128/AAC.39.10.2309](https://doi.org/10.1128/AAC.39.10.2309) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sy_2014_reference](drugs/drug_stavudine/Stavudine_Sy2014_reference.md) | — | 1-compartment (no model) | 0 | Sy SK et al., Estimation of intracellular concentrati…, Antimicrobial agents and ch… (2014) | [10.1128/AAC.01717-13](https://doi.org/10.1128/AAC.01717-13) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Tatsunami_2001_reference](drugs/drug_stavudine/Stavudine_Tatsunami2001_reference.md) | — | 1-compartment (no model) | 6 | Tatsunami S et al., Determination of pharmacokinetic parame…, European journal of drug me… (2001) | [10.1007/BF03190387](https://doi.org/10.1007/BF03190387) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **MTHFR** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Moketla_2018](drugs/drug_stavudine/pgx_Moketla_2018_MTHFR_safety.md) | Moketla MB et al., Pharmacogenetic variation influences se…, PloS one (2018) | [10.1371/journal.pone.0204111](https://doi.org/10.1371/journal.pone.0204111) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **RRM2B** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Moketla_2018](drugs/drug_stavudine/pgx_Moketla_2018_RRM2B_Q100.md) | Moketla MB et al., Pharmacogenetic variation influences se…, PloS one (2018) | [10.1371/journal.pone.0204111](https://doi.org/10.1371/journal.pone.0204111) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SAMHD1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Moketla_2018](drugs/drug_stavudine/pgx_Moketla_2018_SAMHD1_Q100.md) | Moketla MB et al., Pharmacogenetic variation influences se…, PloS one (2018) | [10.1371/journal.pone.0204111](https://doi.org/10.1371/journal.pone.0204111) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SLC28A1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Moketla_2018](drugs/drug_stavudine/pgx_Moketla_2018_SLC28A1_Q100.md) | Moketla MB et al., Pharmacogenetic variation influences se…, PloS one (2018) | [10.1371/journal.pone.0204111](https://doi.org/10.1371/journal.pone.0204111) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=stavudine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| excretion | kidney | `SLC22A6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: MTHFR (safety_allele), RRM2B (metabolism), SAMHD1 (metabolism), SLC28A1 (transport), SLC28A1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 137 matched, 110 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 9  ·  extracted 3  ·  needs_review 1  ·  rejected 4  ·  stale 5
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jullien_2007.pdf` | Jullien V et al., Age-related differences in the pharmaco…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2007.02854.x](https://doi.org/10.1111/j.1365-2125.2007.02854.x) | [17324223](https://pubmed.ncbi.nlm.nih.gov/17324223) | Population PK model for stavudine in children with numeric V/F (40.9 l) and CL/F (16.5 l/h) reported directly in the abstract. |
| `Panhard_2007.pdf` | Panhard X et al., Population pharmacokinetic analysis of…, European journal of clinica… (2007) | popPK | 10 | [10.1007/s00228-007-0337-x](https://doi.org/10.1007/s00228-007-0337-x) | [17694300](https://pubmed.ncbi.nlm.nih.gov/17694300) | Population PK model for stavudine in HIV patients with full numeric parameters (V/F 24 l, Cl/F 16 l/h, ka 0.46 h⁻¹) reported directly in the abstract. |
| `Sy_2014.pdf` | Sy SK et al., Estimation of intracellular concentrati…, Antimicrobial agents and ch… (2014) | popPK | 8 | [10.1128/AAC.01717-13](https://doi.org/10.1128/AAC.01717-13) | [24295968](https://pubmed.ncbi.nlm.nih.gov/24295968) | Population PK model of intracellular stavudine-triphosphate in HIV-infected children with simulated peak/trough values reported, but model parameters (CL, V) are not shown and may be in supplementary material. |
| `Tatsunami_2001.pdf` | Tatsunami S et al., Determination of pharmacokinetic parame…, European journal of drug me… (2001) | popPK | 8 | [10.1007/BF03190387](https://doi.org/10.1007/BF03190387) | [11554428](https://pubmed.ncbi.nlm.nih.gov/11554428) | Human PK study of stavudine with a single-compartment model and numeric parameters (Tmax, Cmax, AUC, t1/2) reported in the abstract, though CL/V not explicitly given. |
| `Hurwitz_2011.pdf` | Hurwitz SJ et al., In silico study supports the efficacy o…, Antiviral research (2011) | popPK | 6 | [10.1016/j.antiviral.2011.08.004](https://doi.org/10.1016/j.antiviral.2011.08.004) | [21875620](https://pubmed.ncbi.nlm.nih.gov/21875620) | In silico population PK model of stavudine in humans, but no numeric parameter values appear in the evidence provided. |

<sub>queue written 2026-10-07T16:16:48.330646+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2011 | irrelevant | 1 | 0 | In-vitro synthesis/anti-HIV activity and cellular uptake study with no PK disposition parameters for stavudine. |
| PGx | Ait-Khaled_2002 | not_relevant | 3 | 5 | Reports viral RT mutations affecting stavudine susceptibility (PD of virus, not host pharmacogenomics) with no PK/PD parameter change quantified for stavudine. |
| PGx | Balboa-Beltrán_2015 | not_relevant | 2 | 2 | Stavudine is only mentioned as a prior association; the study measures TYMS allelic imbalance in expression, not any PK/PD parameter of stavudine. |
| popPK | Balzarini_1998 | irrelevant | 0 | 0 | Antiviral efficacy study in cell culture with no stavudine PK parameters reported. |
| PGx | Baruffini_2015 | not_relevant | 4 | 3 | Yeast model of POLG polymorphisms affecting stavudine-induced mtDNA mutability, not a human PK/PD parameter. |
| popPK | Bertrand_2014 | irrelevant | 0 | 0 | Stavudine is only a co-administered drug; the population PK model and parameters concern efavirenz, not stavudine. |
| PGx | Bertrand_2014 | not_relevant | 2 | 3 | Pharmacogenetic effects (CYP2B6, NAT2) are reported for efavirenz clearance, not for stavudine PK/PD parameters. |
| popPK | Bienczak_2016 | irrelevant | 0 | 0 | This is a PK/PD study of efavirenz in children; stavudine is only mentioned as a co-administered NRTI backbone option, with no stavudine PK parameters reported. |
| PGx | Boyd_2015 | not_relevant | 0 | 0 | Reports HIV genotypic resistance scores and virological outcomes, not host gene variant effects on stavudine PK/PD parameters. |
| PGx | Bräu_2005 | not_relevant | 0 | 0 | Review of HCV/HIV coinfection therapy; no gene variant effects on stavudine PK/PD reported. |
| PGx | Bräu_2005_2 | not_relevant | 0 | 0 | Review of HCV therapy in HIV coinfection; mentions stavudine mitochondrial toxicity risk with ribavirin but no gene variant effect on PK/PD parameters. |
| popPK | Chen_2007 | irrelevant | 0 | 0 | This is a medicinal chemistry paper on podophyllotoxin-stavudine conjugates with only in vitro anti-HIV activity data; no PK parameters for stavudine are reported. |
| popPK | Chokephaibulkit_2011 | irrelevant | 0 | 0 | Stavudine is only mentioned as background context; the study reports PK for zidovudine, lamivudine, and nevirapine, not stavudine. |
| PGx | Chokephaibulkit_2011 | not_relevant | 0 | 5 | The pharmacogenomic finding (CYP2B6 516 genotype affecting AUC) concerns nevirapine, not stavudine; stavudine is only mentioned as background with no genotype-PK/PD data. |
| popPK | Crawford_2010 | irrelevant | 1 | 1 | Stavudine is only a co-administered drug; the population PK model and all reported parameters concern lopinavir, with no stavudine PK values. |
| PGx | Dhoro_2013 | not_relevant | 3 | 5 | For stavudine, only treatment time (not a gene variant) was associated with lipodystrophy; no pharmacogenetic effect on a PK/PD parameter is reported. |
| popPK | Duber_2015 | irrelevant | 0 | 0 | This is a health-policy/prescribing-pattern study of ART regimen uptake; stavudine is only mentioned as a phased-out drug, with no PK parameters or numeric disposition values. |
| popPK | Dumond_2007 | irrelevant | 3 | 2 | Stavudine is one of 11 drugs reported only as a genital tract/plasma concentration ratio (5%); no CL, V, or compartmental/population-PK parameters for stavudine appear in the evidence. |
| PGx | Egaña-Gorroño_2014 | not_relevant | 3 | 5 | Reports SNP associations with body fat changes (PD-like toxicity phenotype) but not a fitted PK/PD parameter of stavudine, and effects are irrespective of ART type. |
| PGx | Franchi_2009 | not_relevant | 1 | 3 | Reports genotoxicity/mutagenicity of stavudine in Drosophila, not a pharmacogenomic effect on PK/PD parameters. |
| popPK | Gainotti_2010 | irrelevant | 0 | 0 | In-vitro antiviral susceptibility assay with EC50 values, not a pharmacokinetic study of stavudine disposition. |
| PGx | Han_2005 | not_relevant | 2 | 3 | Reports HIV drug-resistance mutations (viral genotype) affecting efficacy, not a host gene variant altering stavudine PK/PD parameters. |
| PGx | Hulgan_2008 | not_relevant | 4 | 6 | Reports genetic associations with lipoatrophy (a toxicity/clinical outcome), not a fitted effect on a PK or PD parameter of stavudine. |
| popPK | Hurwitz_2011 | relevant | 6 | 2 | In silico population PK model of stavudine in humans, but no numeric parameter values appear in the evidence provided. |
| popPK | Kappelhoff_2005 | irrelevant | 0 | 0 | Stavudine is only a co-administered background drug; the PK model and parameters are for nevirapine and efavirenz, not stavudine. |
| popPK | Kappelhoff_2005_2 | irrelevant | 0 | 0 | Stavudine is only a co-administered background drug; the PK model and parameters concern nevirapine, not stavudine. |
| popPK | Kappelhoff_2005_3 | irrelevant | 0 | 0 | Stavudine is only a co-administered background drug; PK parameters reported are for nevirapine and efavirenz, not stavudine. |
| PGx | Katlama_2001 | not_relevant | 0 | 0 | No pharmacogenomic analysis of stavudine PK/PD; only HIV resistance genotyping and efficacy/safety outcomes reported. |
| PGx | Kwara_2009 | not_relevant | 0 | 0 | PGx effect (UGT2B7*1c) is reported for zidovudine only; stavudine PK is described without any genotype association. |
| popPK | Lin_1999 | irrelevant | 0 | 0 | This is a review of stavudine resistance (EC50 susceptibility data), with no pharmacokinetic disposition parameters reported. |
| PGx | Llibre_2002 | not_relevant | 0 | 0 | Drug-drug interaction (ritonavir–acenocoumarol) case report; no gene variant/genotype effect on stavudine PK/PD. |
| PGx | Manasa_2013 | not_relevant | 0 | 0 | Reports HIV genotypic resistance mutations affecting predicted drug susceptibility, not a host gene variant effect on stavudine PK/PD parameters. |
| PGx | McComsey_2008 | not_relevant | 0 | 0 | Dose-reduction trial with no gene variant/genotype/phenotype effects on stavudine PK or PD parameters. |
| popPK | Monif_2009 | irrelevant | 3 | 1 | A human bioequivalence study of stavudine, but only AUC/Cmax ratios are described with no actual numeric disposition parameter values (no CL, V, or half-life) in the evidence. |
| popPK | Murphy_2001 | irrelevant | 2 | 0 | Clinical efficacy/safety trial of ABT-378/ritonavir; stavudine is co-administered and no stavudine PK parameters are reported. |
| popPK | Palmer_2008 | irrelevant | 0 | 0 | This is a viral decay/reservoir study; stavudine is only part of the treatment regimen, with no PK parameters for the drug. |
| popPK | Pemmaraju_2014 | irrelevant | 0 | 0 | This is a chemistry/anti-HIV activity study of stavudine derivatives with no pharmacokinetic parameters reported. |
| PGx | Prosperi_2012 | not_relevant | 0 | 0 | No pharmacogenomic variant/genotype effect on stavudine PK/PD parameters; only HIV subtype and clinical predictors of discontinuation. |
| popPK | Regazzi_2000 | irrelevant | 1 | 0 | Stavudine is only a co-administered drug; PK parameters are reported for nelfinavir, not stavudine. |
| popPK | Robinson_2000 | irrelevant | 0 | 0 | In-vitro antiviral activity study of BMS-232632; stavudine is only a combination-test comparator with no PK parameters. |
| popPK | Rojas_2003 | irrelevant | 0 | 0 | This is a triglyceride/metabolic outcomes analysis of clinical trials; stavudine is only a comparator and no PK parameters are reported. |
| popPK | Sabo_2000 | irrelevant | 0 | 0 | Stavudine is only a background co-medication; the PK parameters reported are for nevirapine and lamivudine, not stavudine. |
| popPK | Sarfo_2014 | irrelevant | 0 | 0 | Clinical outcomes cohort study of ART; stavudine is only a treatment arm, no PK parameters reported. |
| popPK | Sarfo_2014_2 | irrelevant | 0 | 0 | Clinical outcomes study with no PK parameters for stavudine; stavudine only appears as a mortality risk factor. |
| popPK | Singh_2014 | irrelevant | 0 | 0 | In-vitro prodrug synthesis and antiviral activity study with no PK disposition parameters for stavudine. |
| popPK | Smith_2015 | irrelevant | 0 | 0 | In-vitro antiviral activity study of a stavudine analog (BMS-986001), with no stavudine PK parameters. |
| PGx | Soko_2023 | not_relevant | 2 | 1 | Stavudine is only mentioned as a commonly prescribed drug; no gene variant effect on its PK/PD parameters is reported. |
| PGx | Soriano_2007 | not_relevant | 0 | 0 | Review of HCV/HIV treatment; only mentions stavudine-ribavirin interaction advice, no pharmacogenomic effect on PK/PD parameters. |
| PGx | Soriano_2009 | not_relevant | 0 | 0 | Review of HBV/HIV treatment; no pharmacogenomic effect on stavudine PK/PD reported. |
| popPK | Taylor_2000 | irrelevant | 0 | 0 | In-vitro antiviral drug-resistance study of dOTC; stavudine (d4T) is only a combination comparator with no PK parameters. |
| PGx | Verstuyft_2005 | not_relevant | 0 | 0 | The pharmacogenomic analysis concerns indinavir PK/response; stavudine is only a co-administered drug with no gene-variant effect on its PK/PD reported. |
| PGx | Vidal_2011 | not_relevant | 3 | 2 | Review on genetic associations with lipodystrophy (toxicity), not PK/PD parameter changes for stavudine. |
| popPK | Vrijens_2005 | irrelevant | 2 | 1 | Stavudine is only a co-administered drug; the PK modeling and parameters concern lopinavir, and no stavudine numeric values appear. |
| popPK | Wang_2025 | irrelevant | 1 | 1 | Stavudine is only a comparator in an anti-HIV prodrug study; no PK disposition parameters for stavudine are reported. |
| PGx | Weinberg_2009 | not_relevant | 0 | 0 | Paper reports HIV genotypic resistance mutations, not host pharmacogenomic effects on stavudine PK/PD parameters. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | In vitro transporter inhibition study with no gene variant/genotype effect on stavudine PK/PD parameters. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | This is an in-vitro antiviral susceptibility (EC50) study, not a pharmacokinetic study with disposition parameters for stavudine. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is analyzed; only lipid and IMT changes on uniform HAART are reported. |
| PGx | Zhao_2011 | not_relevant | 0 | 0 | Reports HIV resistance mutations to stavudine, not a host gene variant effect on stavudine PK/PD parameters. |
| popPK | Zhu_1996 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50/m values), no pharmacokinetic disposition parameters for stavudine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:17 UTC</sub>
