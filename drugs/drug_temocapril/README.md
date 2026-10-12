<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;temocapril&quot;}]"></div>

# temocapril

- **generic name:** temocapril
- **ATC codes:** `C09AA14`
- **DrugBank:** [DB08836](https://go.drugbank.com/drugs/DB08836) · **PubChem:** [CID 443874](https://pubchem.ncbi.nlm.nih.gov/compound/443874)
- **molar mass:** 476.609 g/mol (C23H28N2O5S2) — DrugBank
- **groups:** investigational

## About

Temocapril is an ACE inhibitor developed for treating high blood pressure. It is considered investigational and has not been authorised in the European Union; it has been used mainly in Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7698194](https://www.wikidata.org/wiki/Q7698194) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

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
| 2026-10-07 07:38 | 3:06 | 0/1/0 | 0/1/0 | 0/0/1 | 94,871/3,672 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 9/1 | 1/9 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.059). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Luo_2024_reference](drugs/drug_temocapril/Temocapril_Luo2024_reference.md) | — | general linear (no model) | 2 | Luo X et al., Simultaneously Predicting the Pharmacok…, Pharmaceutics (2024) | [10.3390/pharmaceutics16020234](https://doi.org/10.3390/pharmaceutics16020234) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Yamamoto_2012_MMP_2](drugs/drug_temocapril/pd_Yamamoto_2012_MMP_2.md) | MMP-2 activity ← temocaprilat · inhibition effect | — | Yamamoto D et al., Matrix metalloproteinase-2 inhibition b…, Clinical and experimental p… (2012) | [10.1111/j.1440-1681.2012.12003.x](https://doi.org/10.1111/j.1440-1681.2012.12003.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓ 2/2</span> | **SLCO1B1** | `Q88` · AUC | transport | [Maeda_2006](drugs/drug_temocapril/pgx_Maeda_2006_SLCO1B1_Q88.md) | Maeda K et al., Effects of organic anion transporting p…, Clinical pharmacology and t… (2006) | [10.1016/j.clpt.2006.01.011](https://doi.org/10.1016/j.clpt.2006.01.011) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=temocapril).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `SLCO1A2` unknown | DrugBank actor |
| absorption | small intestine | `SLC15A1` unknown, `SLCO1A2` unknown | DrugBank actor |
| metabolism | liver | `SLCO1B1` transport | paper PGx gene |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 43 returned
- **screened:** 11  ·  **relevant:** 7
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arakawa_2001.pdf` | Arakawa M et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (2001) | popPK | 8 | [10.1007/s002280000237](https://doi.org/10.1007/s002280000237) | [11294366](https://pubmed.ncbi.nlm.nih.gov/11294366) | The study reports PK of temocaprilat (active metabolite) in humans, but specific numeric parameter values (CL, V, t1/2) are not present in the provided abstract text. |
| `Akazawa_2018.pdf` | Akazawa T et al., Application of Intestinal Epithelial Ce…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.118.083246](https://doi.org/10.1124/dmd.118.083246) | [30135242](https://www.ncbi.nlm.nih.gov/pubmed/30135242) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T07:37:44.725216+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akazawa_2018 | irrelevant | 0 | 0 | no_text gate: only 176 chars of text extracted (&lt; 400) |
| PGx | Akazawa_2018 | not_relevant | 0 | 0 | The paper focuses on intestinal epithelial cells and prodrug hydrolysis generally, with no mention of temocapril or specific pharmacogenomic variants affecting its PK/PD. |
| popPK | Arakawa_2001 | relevant | 8 | 2 | The study reports PK of temocaprilat (active metabolite) in humans, but specific numeric parameter values (CL, V, t1/2) are not present in the provided abstract text. |
| popPK | Hirosawa_2023 | irrelevant | 1 | 0 | Temocapril is used only as a probe substrate to characterize hydrolase inhibition by orlistat, and no quantitative PK parameters (CL, V, etc.) for temocapril are reported. |
| PD | Hirosawa_2023 | not_relevant | 1 | 1 | Temocapril appears only as an in vitro CES1 substrate with an IC50 (&gt;100 nM) for orlistat inhibition; no exposure- or dose-response relationship or PD parameters for temocapril itself are reported. |
| popPK | Horita_2006 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the antiproteinuric effects and aldosterone breakthrough of temocapril, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ishikawa_1997 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of temocapril's effect on cyclosporine-induced nephrotoxicity in rats, reporting renal function markers (creatinine, blood flow) rather than quantitative pharmacokinetic parameters (CL, V, ka) for temocapril. |
| popPK | Ishizuka_1997 | irrelevant | 2 | 2 | The study focuses on the mechanism of biliary excretion (transporter kinetics) rather than reporting standard population pharmacokinetic parameters like clearance, volume of distribution, or half-life for the parent drug or metabolite. |
| popPK | Ishizuka_1998 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of hepatic uptake transporters (oatp1) in rat hepatocytes, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life for temocapril. |
| popPK | Ishizuka_1999 | irrelevant | 2 | 2 | The study reports biliary transport clearance for temocaprilat (the metabolite) in multiple animal species, but does not provide standard systemic PK parameters (CL, V, t1/2) for temocapril or a population PK model. |
| popPK | Kanno_2005 | irrelevant | 0 | 0 | The study is a clinical trial assessing renal outcomes in IgA nephropathy and does not report pharmacokinetic parameters for temocapril. |
| popPK | Luo_2024 | relevant | 8 | 2 | The paper develops a PBPK model for temocapril (a CES1 substrate) in humans, but specific numeric PK parameters for temocapril are not explicitly listed in the provided evidence tables (which focus on other drugs like flumazenil and pethidine) or text, likely residing in figures or supplementary material not fully detailed here. |
| popPK | Maeda_2006 | relevant | 4 | 5 | The study reports AUC and renal clearance values for temocapril in humans, but lacks compartmental parameters (CL, V, ka) required for a full PK model. |
| popPK | Ninomiya_2005 | irrelevant | 0 | 0 | The study is an in-vitro functional analysis of Mrp2 transporters in dogs and rats, and temocaprilat is only mentioned as a reference substrate for biliary excretion clearance, not as the subject of a PK parameter study. |
| popPK | Nozawa_2006 | irrelevant | 2 | 0 | The study focuses on mortality and pharmacodynamics (ACE inhibition, blood pressure) in rats, and while it mentions PK of the metabolite, no quantitative PK parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Nozawa_2011 | irrelevant | 2 | 0 | The study is an in situ rat intestinal perfusion model focusing on absorption mechanisms and hydrolysis, not a systemic pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for temocapril. |
| popPK | Sasaki_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated biliary clearance using temocaprilat as a probe ligand, not a pharmacokinetic study reporting disposition parameters for temocapril. |
| popPK | Shionoiri_1993 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic drug interactions with ACE inhibitors and does not report original quantitative disposition parameters for temocapril. |
| PD | Shionoiri_1993 | not_relevant | 1 | 0 | Narrative review of ACE inhibitor PK interactions; temocapril mentioned only qualitatively with no numeric PD or exposure-response data. |
| popPK | Shionoiri_1997 | irrelevant | 0 | 0 | The paper is a review of fosinopril pharmacokinetics, and temocapril is only mentioned as a comparator for excretion pathways without any quantitative data. |
| popPK | Shioya_1989 | irrelevant | 0 | 0 | The paper describes an analytical method for CS-622 (not temocapril) and contains no pharmacokinetic parameter values. |
| popPK | Shou_1997 | irrelevant | 0 | 0 | The study focuses on renal function and antioxidant enzyme activities in rats, not on the pharmacokinetic parameters of temocapril. |
| popPK | Song_2002 | irrelevant | 2 | 0 | This is a review article that discusses temocapril qualitatively but does not provide specific quantitative pharmacokinetic parameter values (CL, V, etc.) in the text. |
| PD | Song_2002 | not_relevant | 2 | 1 | Review article with only qualitative statements about ACE inhibitor dose-response curves; no numeric PD parameters for temocapril are reported or derivable. |
| popPK | Takikawa_2001 | irrelevant | 2 | 0 | The study investigates biliary excretion mechanisms in liver-injured rats and does not report standard quantitative PK parameters (CL, V, ka) for temocapril. |
| PGx | Yamada_2023 | not_relevant | 0 | 0 | The study uses genome-edited Caco-2 cells to model intestinal absorption and metabolism, but it does not report pharmacogenomic effects of human genetic variants on PK/PD parameters. |
| popPK | Yasunari_2004 | irrelevant | 1 | 0 | The paper is a review summarizing pharmacological and clinical effects without reporting specific quantitative pharmacokinetic parameter values (CL, V, ka, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:35 UTC</sub>
