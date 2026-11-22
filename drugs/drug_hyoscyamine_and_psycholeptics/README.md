<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03C&quot;,&quot;href&quot;:&quot;atc/A03C.md&quot;},{&quot;label&quot;:&quot;hyoscyamine and psycholeptics&quot;}]"></div>

# hyoscyamine and psycholeptics

- **generic name:** hyoscyamine and psycholeptics
- **ATC codes:** `A03CB31`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

This class of drugs combines belladonna and its derivatives with psycholeptics to treat functional gastrointestinal disorders.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-20 11:00 | 10:08 | 0/0/0 | 0/0/0 | 0/0/0 | 233,239/17,571 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 47 matched, 64 returned
- **screened:** 8  ·  **relevant:** 6
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kentala_1990.pdf` | Kentala E et al., Intramuscular atropine in healthy volun…, International journal of cl… (1990) | popPK | 10 |  | [2228327](https://pubmed.ncbi.nlm.nih.gov/2228327) | The study reports quantitative pharmacokinetic parameters (t1/2, tmax, AUC ratios, renal excretion %) for hyoscyamine in humans directly in the abstract text. |
| `Pihlajamäki_1986.pdf` | Pihlajamäki KK et al., Pharmacokinetics and clinical effects o…, Acta pharmacologica et toxi… (1986) | popPK | 10 | [10.1111/j.1600-0773.1986.tb00166.x](https://doi.org/10.1111/j.1600-0773.1986.tb00166.x) | [3799206](https://pubmed.ncbi.nlm.nih.gov/3799206) | The study reports quantitative pharmacokinetic parameters (half-lives, tmax) for scopolamine, which is the active isomer of hyoscyamine and belongs to the hyoscyamine_and_psycholeptics class, in human subjects. |
| `Putcha_1989.pdf` | Putcha L et al., Pharmacokinetics and oral bioavailabili…, Pharmaceutical research (1989) | popPK | 10 | [10.1023/a:1015916423156](https://doi.org/10.1023/a:1015916423156) | [2762223](https://pubmed.ncbi.nlm.nih.gov/2762223) | The study reports quantitative PK parameters (Cl, Vd, t1/2) for scopolamine, a key member of the hyoscyamine class, in human subjects. |
| `Bouhajib_2025.pdf` | Bouhajib M et al., Clinical Pharmacokinetics of Atropine A…, Journal of ocular pharmacol… (2025) | popPK | 9 | [10.1089/jop.2024.0113](https://doi.org/10.1089/jop.2024.0113) | [39365886](https://pubmed.ncbi.nlm.nih.gov/39365886) | The study reports quantitative PK parameters (Cmax, Tmax, AUC, half-life) for L-hyoscyamine (the active enantiomer of atropine, a key psycholeptic/anticholinergic), but lacks explicit values for clearance and volume which are required for a comprehensive score, though standard NCA parameters are present. |
| `Siluk_2007.pdf` | Siluk D et al., HPLC-atmospheric pressure chemical ioni…, Journal of chromatography.… (2007) | popPK | 9 | [10.1016/j.jchromb.2007.09.035](https://doi.org/10.1016/j.jchromb.2007.09.035) | [17951120](https://pubmed.ncbi.nlm.nih.gov/17951120) | The paper provides explicit quantitative PK parameters (CL/f, Vss/f) for hyoscyamine enantiomers in human plasma. |
| `Kanto_1989.pdf` | Kanto J et al., Pharmacokinetics of scopolamine during…, Acta anaesthesiologica Scan… (1989) | popPK | 8 | [10.1111/j.1399-6576.1989.tb02950.x](https://doi.org/10.1111/j.1399-6576.1989.tb02950.x) | [2800990](https://pubmed.ncbi.nlm.nih.gov/2800990) | Scopolamine is the active metabolite of hyoscyamine (hyoscine), and the paper reports key pharmacokinetic parameters (t_max, t_1/2, % excretion) for scopolamine following hyoscyamine administration, although it is an open-label study rather than a formal compartmental model. |

<sub>queue written 2026-11-20 11:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aaltonen_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of atropine (specifically 1-hyoscyamine) rather than hyoscyamine as the primary subject, and focuses on assay comparison rather than reporting distinct PK parameters for hyoscyamine itself. |
| popPK | Adams_1982 | irrelevant | 0 | 0 | The study reports pharmacokinetics for atropine (dl-hyoscyamine), which is a different chemical entity than hyoscyamine (l-hyoscyamine) or psycholeptics. |
| popPK | Allen_1987 | irrelevant | 0 | 0 | The study assesses pharmacodynamic effects on esophageal function and does not report pharmacokinetic parameters such as clearance or volume for hyoscyamine. |
| popPK | Antor_2014 | irrelevant | 0 | 0 | The paper is a review of transdermal scopolamine for PONV prevention and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for hyoscyamine or psycholeptics. |
| popPK | Berner_1994 | irrelevant | 0 | 0 | The paper is a review of transdermal systems and does not report specific quantitative pharmacokinetic parameters (CL, V, ka) for hyoscyamine or psycholeptics as the primary subject. |
| popPK | Blumenfeld_2024 | irrelevant | 0 | 0 | The paper is a review of antidepressants (SSRIs, SNRIs, ketamine) and does not study hyoscyamine/psycholeptics or report specific PK parameters for them. |
| popPK | Calvo_2022 | irrelevant | 0 | 0 | The study evaluates the PK/PD of carisoprodol (a muscle relaxant), not hyoscyamine or psycholeptics, making it unrelated to the target drug. |
| popPK | Calvo_2022_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of carisoprodol and meprobamate, not hyoscyamine. |
| popPK | Carbonaro_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carisoprodol and its metabolite meprobamate, not hyoscyamine or psycholeptics. |
| popPK | Ceschi_2013 | irrelevant | 0 | 0 | The paper studies meprobamate, not hyoscyamine or psycholeptics (in the context of the specific drug class 'hyoscyamine_and_psycholeptics' usually referring to anticholinergics/antispasmodics like hyoscyamine, or potentially a specific dataset label, but meprobamate is a different anxiolytic muscle relaxant); even if considered a psycholeptic, it is a different drug entity than hyoscyamine. |
| popPK | Cornelissen_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of atropine and scopolamine in rats, not hyoscyamine or psycholeptics. |
| popPK | Dalén_1996 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for carisoprodol and meprobamate, not hyoscyamine. |
| popPK | Danish_2022 | irrelevant | 0 | 0 | The paper investigates the pharmacological effects of cerium oxide nanoparticles in an Alzheimer's rat model and does not report pharmacokinetic parameters for hyoscyamine or psycholeptics. |
| popPK | De_1981 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for barbiturates and related sedatives, not for hyoscyamine or psycholeptics. |
| popPK | Dixon_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levorphanol, not hyoscyamine or psycholeptics. |
| popPK | El-Ganainy_2021 | irrelevant | 0 | 0 | The study focuses on galantamine, not hyoscyamine or psycholeptics. |
| popPK | Ensing_1988 | irrelevant | 0 | 0 | The study focuses on scopolamine, which is a different chemical compound from hyoscyamine, and does not report quantitative pharmacokinetic parameters for the target drug class. |
| popPK | Ferri_2025 | irrelevant | 0 | 0 | The study focuses on the in vitro metabolism of carisoprodol, not the pharmacokinetics of hyoscyamine or psycholeptics. |
| popPK | Ferri_2026 | irrelevant | 0 | 0 | The study focuses on carisoprodol, a muscle relaxant that is chemically distinct from hyoscyamine or psycholeptics, and does not provide PK parameters for the target drug. |
| popPK | Freund_1981 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and treatment of meprobamate intoxication, not hyoscyamine or psycholeptics. |
| popPK | Hassan_1986 | irrelevant | 0 | 0 | The study focuses on meprobamate, which is a different drug, not hyoscyamine_and_psycholeptics. |
| popPK | Held_1969 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| popPK | Hoy_1978 | irrelevant | 0 | 0 | The study focuses on meprobamate, not hyoscyamine_and_psycholeptics. |
| popPK | James_2022 | irrelevant | 0 | 0 | The paper is a Cochrane systematic review of treatments for sialorrhea in MND and does not report pharmacokinetic parameters for hyoscyamine or psycholeptics. |
| popPK | John_2010 | irrelevant | 2 | 0 | This is a method development paper for enantioselective determination of hyoscyamine, reporting validation metrics and assay conditions rather than quantitative population pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Joosen_2013 | irrelevant | 0 | 0 | The paper is a review on decontamination and treatment of VX poisoning, focusing on toxicity and antidotes (oximes, atropine) rather than the pharmacokinetic parameters of hyoscyamine/psycholeptics. |
| popPK | Kanto_1988 | irrelevant | 2 | 1 | The paper is a review discussing the pharmacokinetics of atropine, scopolamine, and glycopyrrolate, but does not report quantitative PK parameters (CL, V, etc.) for hyoscyamine. |
| popPK | Kentala_1989 | irrelevant | 2 | 0 | The study focuses on atropine (which includes hyoscyamine as an isomer) rather than the specific drug class 'hyoscyamine_and_psycholeptics' as the primary subject, and no specific numeric values for hyoscyamine were extracted. |
| popPK | Lewandowski_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carisoprodol and meprobamate, not hyoscyamine or psycholeptics. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The paper describes a novel butyrylcholinesterase inhibitor (8012-9656) and its anti-amyloidogenic profile, with no data regarding the pharmacokinetics of hyoscyamine or psycholeptics. |
| popPK | Miller_1989 | irrelevant | 0 | 0 | The paper is a review of the effects of smoking on various drugs (imipramine, theophylline, etc.) and does not contain any pharmacokinetic data or parameters for hyoscyamine or psycholeptics. |
| popPK | Mubaslat_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of atropine, not hyoscyamine, and while they are related anticholinergics, atropine is a distinct chemical entity and not a metabolite of hyoscyamine. |
| popPK | Nachum_2006 | irrelevant | 0 | 0 | The paper discusses scopolamine, not hyoscyamine or psycholeptics as the primary subject, and does not report quantitative PK parameters for the target drug class. |
| popPK | Nile_2019 | irrelevant | 0 | 0 | The study focuses on the antifungal and immunomodulatory effects of pilocarpine and scopolamine in an invertebrate model, not on the pharmacokinetics of hyoscyamine and psycholeptics. |
| popPK | Pavy-Le_1997 | irrelevant | 0 | 0 | The paper is a review of pharmacology in space and does not report quantitative pharmacokinetic parameters for hyoscyamine or psycholeptics. |
| popPK | Pensado_2022 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| popPK | Prommer_2012 | irrelevant | 0 | 0 | The paper is a general review on pain management in the elderly and does not report specific pharmacokinetic parameters for hyoscyamine or psycholeptics. |
| popPK | Renner_2005 | irrelevant | 0 | 0 | The paper discusses scopolamine (hyoscine), not hyoscyamine, and is a review without specific compartmental population PK parameter values for the target drug. |
| popPK | Ridout_1988 | irrelevant | 0 | 0 | The paper is a review of transdermal drug delivery generally, and does not provide quantitative pharmacokinetic parameters for hyoscyamine or psycholeptics. |
| popPK | Ruan_2024 | irrelevant | 0 | 0 | The study focuses on the delivery and therapeutic efficacy of huperzine A for Alzheimer's disease, not the pharmacokinetics of hyoscyamine_and_psycholeptics. |
| popPK | Rupreht_1990 | irrelevant | 0 | 0 | The text describes the clinical syndrome and diagnosis of anticholinergic effects, containing no quantitative pharmacokinetic parameters or models for hyoscyamine. |
| popPK | Sellers_1978 | irrelevant | 0 | 0 | The paper is a general review discussing the effects of ethanol on various drugs (benzodiazepines, phenytoin, etc.) and does not report specific pharmacokinetic parameters for hyoscyamine. |
| popPK | Singh-Franco_2005 | irrelevant | 0 | 0 | The paper is a review of trospium chloride, which is a different drug from hyoscyamine, and does not provide quantitative PK parameters for the target agent. |
| popPK | Stankovic_2019 | irrelevant | 1 | 0 | The study focuses on scopolamine (hyoscine), which is a different anticholinergic agent from hyoscyamine (hyoscyamine base). |
| popPK | Thawabteh_2025 | irrelevant | 2 | 0 | The paper is a broad review of Datura alkaloids (including hyoscyamine) focusing on biosynthesis and pharmacology, but it contains no original quantitative pharmacokinetic parameter values (CL, V, ka, etc.) for hyoscyamine. |
| popPK | Thiermann_1996 | irrelevant | 0 | 0 | The subject drug is hyoscyamine_and_psycholeptics, but this paper studies the pharmacokinetics of atropine (a different chemical entity, though an antagonist at the same receptor) in dogs. |
| popPK | Trescot_2008 | irrelevant | 0 | 0 | The paper is a review of opioid pharmacology and does not mention or provide pharmacokinetic data for hyoscyamine_and_psycholeptics. |
| popPK | Tribut_2010 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of felbamate, which is not hyoscyamine_and_psycholeptics, and no parameters for the target drug are reported. |
| popPK | Verpooten_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of barbiturates and other drugs (phenobarbital, meprobamate, etc.) and does not report any data for hyoscyamine or psycholeptics. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a novel scopolamine analogue (S-3a), not hyoscyamine itself. |
| popPK | Wen_2022 | irrelevant | 0 | 0 | The study focuses on opioid equianalgesia tools and does not involve hyoscyamine or psycholeptics. |
| popPK | Xin-Guo_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of DMNG-3, not hyoscyamine or psycholeptics. |
| popPK | Yamada_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and receptor binding of mirabegron, not the pharmacokinetic parameters of hyoscyamine and psycholeptics. |
| popPK | Zhong_2025 | irrelevant | 0 | 0 | The paper studies melatonin-isatin hybrids for Alzheimer's disease, not the pharmacokinetics of hyoscyamine_and_psycholeptics. |
| popPK | de_1982 | irrelevant | 2 | 0 | This is a review paper discussing rectal drug administration in general, and while hyoscine (a related anticholinergic) is mentioned as a class representative, no specific quantitative pharmacokinetic parameters for hyoscyamine or psycholeptics are reported in the evidence. |
| popPK | de_1985 | irrelevant | 0 | 0 | The paper is an ethnobotanical review of ritual snuffs discussing plants like Anadenanthera and Nicotiana, and does not report quantitative pharmacokinetic parameters for hyoscyamine or psycholeptics. |
| popPK | unknown_1999 | irrelevant | 0 | 0 | The paper is a position statement on multi-dose activated charcoal and does not report pharmacokinetic parameters for hyoscyamine or psycholeptics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhyoscyamine_and_psycholeptics%5D&body=Drug%3A%20hyoscyamine_and_psycholeptics%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hyoscyamine_and_psycholeptics/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
